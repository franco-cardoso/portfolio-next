import "../styles/globals.css";
import "../styles/about.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        document.getElementById("__next").className = "root";
    }, []);

    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Mukta&display=swap" rel="preload" as="style" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
                    rel="preload"
                    as="style"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
