import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import shuffle from "lodash.shuffle";
import { printful } from "lib/printful-client";
import { fetchMoreProducts } from "lib/fetchMoreProducts";
import { SEO } from "components/SEO";
import { ProductPageProps } from "types/productPages";
import { useEffect, useState } from "react";
import { ProductPageLayout } from "components/ProductPageLayout";
const Heading = dynamic(() => import("../components/Heading"), { ssr: false });
const ProductGrid = dynamic(() => import("../components/ProductGrid"));

const IndexPage: React.FC<ProductPageProps> = ({ products }) => {
  const [offset, setOffset] = useState(0);
  const [currentProducts, setCurrentProducts] = useState([...products]);

  const [allProductsAreShown, setAllProductsAreShown] = useState(false);

  useEffect(() => {
    const loadMoreElement = document.getElementById("loadMore");
    if (loadMoreElement && !allProductsAreShown) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !allProductsAreShown) {
          setOffset((prev) => prev + 21);
        }
      });
      observer.observe(loadMoreElement);

      return () => {
        if (loadMoreElement) {
          observer.unobserve(loadMoreElement);
        }
      };
    }
  }, [allProductsAreShown]);

  const handleUpdateProducts = async () => {
    const { products } = await fetchMoreProducts(offset);
    if (products.length === 0) {
      setAllProductsAreShown(true);
      return;
    }
    setCurrentProducts([...currentProducts, ...products]);
  };

  useEffect(() => {
    offset > 0 && handleUpdateProducts();
  }, [offset]);

  return (
    <ProductPageLayout noProducts={products.length < 1}>
      <SEO />
      <Heading />
      <ProductGrid products={currentProducts} />
      <div id="loadMore" />
    </ProductPageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { result } = await printful.get("sync/products?limit=21");

    return {
      props: {
        products: shuffle(result),
      },
    };
  } catch (e) {
    return {
      props: {
        products: [],
      },
    };
  }
};

export default IndexPage;
