import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { SEO } from "./SEO";
const Heading = dynamic(() => import("./Heading"), { ssr: false });

interface ProductPageLayoutProps {
  noProducts: boolean;
  children: React.ReactNode;
  isCategoryPage?: boolean;
  seoImage?: string;
  seoDescription?: string;
}

export const ProductPageLayout: React.FC<ProductPageLayoutProps> = ({
  noProducts,
  children,
  isCategoryPage = false,
  seoImage,
  seoDescription,
}) => {
  const router = useRouter();
  const { query, asPath } = router;
  let path = query.productName
    ? (query.productName as string)
    : (query.category as string);

  if (noProducts) {
    return (
      <>
        <SEO
          title={"we're slammed!"}
          url={`https://foodthings.shop${asPath}`}
          image={
            isCategoryPage
              ? `https://littlebuilds.s3.amazonaws.com/social-${query.category}.jpg`
              : null
          }
        />
        <Heading overloaded />
      </>
    );
  }

  let image: string;
  if (seoImage) {
    image = seoImage;
  }

  if (isCategoryPage) {
    image = `https://littlebuilds.s3.amazonaws.com/social-${query.category}.jpg`;
  }
  return (
    <>
      <SEO
        title={path}
        url={`https://foodthings.shop${asPath}`}
        description={seoDescription}
        image={image}
        isProduct={seoImage != null}
      />
      <Heading />
      {children}
    </>
  );
};
