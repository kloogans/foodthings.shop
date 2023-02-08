import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const BreadCrumbs: React.FC<{ className?: string }> = ({ className = "" }) => {
  const router = useRouter();
  const [subRoute, idRoute] = router.asPath.split("/").slice(1);

  return (
    <div
      className={`flex items-center justify-center bg-black py-2 px-4 text-white text-sm ${className}`}
    >
      <Link href={`/`} className="hover:text-secondary" title="home">
        <strong>home</strong>
      </Link>
      {subRoute && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 w-6 inline-block"
          >
            <path
              fillRule="evenodd"
              className="origin-center -rotate-90"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <Link
            href={`/${subRoute}`}
            className={`hover:text-rose-500 ${
              !idRoute ? "text-rose-400 font-bold" : ""
            }`}
            title={subRoute as string}
          >
            <strong>{subRoute}</strong>
          </Link>
        </>
      )}
      {idRoute && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 w-6 inline-block"
          >
            <path
              fillRule="evenodd"
              className="origin-center -rotate-90"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-yellow-400 font-bold">
            <strong>{(idRoute as string).split("-").join(" ")}</strong>
          </span>
        </>
      )}
    </div>
  );
};

export default BreadCrumbs;
