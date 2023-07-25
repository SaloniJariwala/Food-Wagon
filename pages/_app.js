import "@/assets/css/style.css";
import { Open_Sans } from "next/font/google";

const OpenSans = Open_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export default function App({ Component, pageProps }) {
    return (
        <main className={OpenSans.className}>
            <Component {...pageProps} />
        </main>
    );
}
