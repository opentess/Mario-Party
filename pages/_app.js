import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { Quicksand } from "@next/font/google";
const inter = Quicksand({
  subsets: ["latin"],
  variable: "--font-inter",
});
function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
