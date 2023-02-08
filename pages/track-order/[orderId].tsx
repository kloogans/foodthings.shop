import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import BreadCrumbs from "components/BreadCrumbs";
import { Icon } from "components/Icon";
import PrimaryLink from "components/PrimaryLink";
import { ProductPageLayout } from "components/ProductPageLayout";
import SkeletonLoader from "components/SkeletonLoader";
import { printful } from "lib/printful-client";

const ProgressBar = ({ status }) => {
  const [progress, setProgress] = useState(0);
  const pendingClass = `${
    status === "pending" ? "bg-yellow-400" : "bg-zinc-400"
  }
${status === "being printed" || status === "shipped" ? "bg-green-400" : ""}
`;

  const printingClass = `${
    status === "being printed" ? "bg-yellow-400" : "bg-zinc-400"
  } ${status === "shipped" ? "bg-green-400" : ""}`;

  return (
    <ul className="w-full grid grid-cols-3 gap-1 mb-4">
      <li
        className={`w-full h-2 ${pendingClass}
        `}
      ></li>
      <li className={`w-full h-2 ${printingClass}`}></li>
      <li
        className={`w-full h-2 ${
          status === "shipped" ? "bg-green-400" : "bg-zinc-400"
        }`}
      ></li>
    </ul>
  );
};

const OrderPage = ({ order }) => {
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);
  const {
    id,
    status,
    tracking,
    product: { files, name },
  } = order;
  const productImage = files[files.length - 1].preview_url;
  let orderStatus = status;
  let orderStatusDescription = "your order is being processed";
  switch (status) {
    case "pending":
      orderStatus = "pending";
      break;
    case "inprocess":
      orderStatus = "being printed";
      orderStatusDescription =
        "your order is currently being printed, inspected for quality, and packed.";
      break;
    case "shipped":
      orderStatus = "shipped";
      orderStatusDescription = "it's on its way!";
      break;
    case "canceled":
      orderStatus = "canceled";
      break;
    case "returned":
      orderStatus = "returned";
      break;
    case "fulfilled":
      orderStatus = "shipped";
      break;
    default:
      orderStatus = "pending";
  }

  return (
    <ProductPageLayout noProducts={false}>
      <div className="text-center relative mb-10">
        <div className="flex flex-col items-center justify-center relative p-0 md:p-4 z-10 bg-white shadow-md border-8 border-black">
          <BreadCrumbs className="mb-1 self-start" />
          <div
            className={`w-full flex flex-col justify-center items-center mb-4`}
          >
            <div className="h-[20rem] w-[20rem] md:w-[27rem] md:h-[27rem] object-fit-contain relative flex items-center justify-center">
              <p
                className={`text-sm text-black ${imageLoaded ? "hidden" : ""}`}
              >
                <SkeletonLoader type={"tee"} />
              </p>
              <Image
                src={productImage}
                onLoadStart={() => setImageLoaded(false)}
                onLoadingComplete={() => setImageLoaded(true)}
                alt={name}
                layout="fill"
              />
            </div>
            <h1 className="text-2xl text-black text-center leading-none mb-1">
              <strong>#{id}</strong>
            </h1>
            <h2 className="text-lg text-black text-center mb-4 leading-none">
              {name}
            </h2>
            <div className="border-4 border-black p-4 flex flex-col items-center justify-center w-full max-w-md mb-4">
              <Icon
                url={`/assets/${orderStatus.split(" ").join("-")}.svg`}
                className="w-16 h-16 bg-black mb-1"
              />
              <p className={`text-md text-center mb-4 leading-none text-black`}>
                <strong>{orderStatus}</strong>
              </p>
              <ProgressBar status={orderStatus} />
              {status === "fulfilled" && (
                <>
                  <PrimaryLink
                    href={tracking.trackingUrl}
                    isExternal
                    text="track your order"
                  />
                </>
              )}
            </div>
            <button
              className="text-sm text-zinc-700 text-center cursor-hover hover:text-black"
              onClick={() => router.back()}
              title="go back"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 inline-block"
                >
                  <path
                    fillRule="evenodd"
                    className="origin-center rotate-90 "
                    d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              back
            </button>
          </div>
        </div>
      </div>
    </ProductPageLayout>
  );
};

export default OrderPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { orderId } = context.query;

  try {
    const {
      code,
      result,
      result: { status, external_id, shipping, created, items, shipments },
    } = await printful.get(`orders/@${orderId}`);
    console.log(items);
    if (code !== 200) {
      return {
        redirect: {
          permanent: false,
          destination: `/404`,
        },
      };
    }

    const { name, files } = items[0];

    let order = {
      id: external_id,
      status,
      shipping,
      created,
      product: { name, files },
      tracking: null,
    };

    if (status === "fulfilled") {
      const { tracking_url, carrier } = shipments[0];
      order.tracking = {
        trackingUrl: tracking_url,
        carrier,
      };
    }

    return {
      props: {
        order: order || null,
      },
    };
  } catch (e) {
    console.log(e.message);
    return {
      redirect: {
        permanent: false,
        destination: `/404`,
      },
    };
  }
};
