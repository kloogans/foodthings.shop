import Head from "next/head"
import Script from "next/script"
import BreadCrumbs from "components/BreadCrumbs"
import { storeConfig } from "config/storeConfig"
import { SEO } from "components/SEO"

const SUPPORT_EMAIL = storeConfig.supportEmail
const TermsPage = () => {
  return (
    <div className="flex flex-col items-center justify-start relative p-0 md:p-4 z-10 bg-white shadow-md border-8 border-black md:min-h-[40rem]">
      {/* write a two sentence description for the terms of sale for seo */}

      <SEO
        title="Terms of Sale"
        description="Check out the terms and conditions of Food Things. Here you can find our return and exchange policies."
      />
      <Script
        id="ga-script-1"
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-14G8K4XXTK"}
      />
      <Script id="ga-script-2" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-14G8K4XXTK')`}
      </Script>
      <BreadCrumbs className="mb-1 self-start" />

      <h1 className="text-3xl md:text-5xl text-black text-center leading-none mb-4 slab">
        terms of sale
      </h1>
      <div className="max-w-2xl mx-auto prose text-black child:lowercase mb-4 px-2">
        <h2 className="text-black">What&apos;s your return policy?</h2>
        <p>
          We don&apos;t offer returns and exchanges, but if there&apos;s
          something wrong with your order, please let us know by contacting us
          at <strong>{SUPPORT_EMAIL}</strong>!
        </p>

        <h2 className="text-black">Do you offer refunds?</h2>
        <p>
          Refunds are only offered to customers that receive the wrong items or
          damaged items. If any of these apply, please contact us at{" "}
          <strong>{SUPPORT_EMAIL}</strong> with photos of wrong/damaged items
          and we&apos;ll sort that out for you.
        </p>

        <h2 className="text-black">
          Can I exchange an item for a different size/color?
        </h2>
        <p>
          At this time, we don&apos;t offer exchanges. Though rare, it&apos;s
          possible that an item you ordered was mislabelled. If that&apos;s the
          case, please let us know at <strong>{SUPPORT_EMAIL}</strong> within a
          week after receiving your order. Include your order number and photos
          of the mislabeled item, and we&apos;ll send you a new one, or issue a
          refund!
        </p>
      </div>
    </div>
  )
}

export default TermsPage
