import "../styles/globals.css";
import type {AppProps} from "next/app";
import {NextSeo} from "next-seo";
import {Children} from "react";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <NextSeo
                title="RTRT: Request To Render Time"
                description="Benchmarking NextJS 12 different SSR and CSR methods."
                openGraph={{
                    type: "website",
                    locale: "en_IE",
                    url: "https://next12-bench.vercel.app/",
                    site_name: "RTRT: Request To Render Time",
                }}
                twitter={{
                    handle: "@is_it_ayush",
                    site: "@site",
                    cardType: "summary_large_image",
                }}
            />
            <div className="h-screen dark:bg-black dark:text-white">
                <Component {...pageProps} />
            </div>
        </>
    );
}
