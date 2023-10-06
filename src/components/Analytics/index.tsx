// Analytics.tsx
"use client";

import { pageview } from "@/lib/gtm";
import Head from "next/head";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname, searchParams]);

  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
    return null;
  }

  return (
    <>
      <Head>
        <meta
          name="adopt-website-id"
          content="d46a250e-bc48-4b24-9860-36b890d01e22"
        />
      </Head>
      <Script
        id="adopt-script"
        strategy="afterInteractive"
        src="//tag.goadopt.io/injector.js?website_code=d46a250e-bc48-4b24-9860-36b890d01e22"
        className="adopt-injector"
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=GTM-553Z7423`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-553Z7423');`,
        }}
      />
    </>
  );
}
