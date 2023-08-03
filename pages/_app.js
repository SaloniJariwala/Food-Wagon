import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/assets/css/style.css";
import { Source_Sans_3 } from "next/font/google";

const SourceSans = Source_Sans_3({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export default function App({ Component, pageProps }) {
    return (
        <main className={SourceSans.className}>
            <Component {...pageProps} />
        </main>
    );
}
