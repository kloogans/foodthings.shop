import Head from "next/head"
import Script from "next/script"
import { storeConfig } from "config/storeConfig"

const { storeName, description, seoImage, storeUrl } = storeConfig

const DEFAULT_DESCRIPTION = description
const DEFAULT_TITLE = storeName
const DEFAULT_IMAGE = seoImage
const DEFAULT_URL = storeUrl

interface SEOProps {
  description?: string
  image?: string
  title?: string
  url?: string
  isProduct?: boolean
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  url,
  isProduct = false
}) => {
  const capitalizedTitle = (title: string) =>
    title.charAt(0).toUpperCase() + title.slice(1)
  title = title ? `${capitalizedTitle(title)} | ${storeName}` : DEFAULT_TITLE
  description = description || DEFAULT_DESCRIPTION
  image = image || DEFAULT_IMAGE
  url = url || DEFAULT_URL

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Facebook */}
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={description} />
        {/* Twitter */}
        <meta name="twitter:creator" content="@kloogans" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:card"
          content={isProduct ? "summary_image" : "summary_large_image"}
        />
        <meta name="twitter:image" content={image} />
      </Head>
      <Script
        id="ga-script-1"
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-14G8K4XXTK"}
      />
      <Script id="ga-script-2" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Z6S3E3Z5E0')`}
      </Script>
    </>
  )
}
