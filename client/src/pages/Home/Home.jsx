import homeStyles from "./home.module.css";
import Stack from "../../components/Stack/Stack";
import Marquee from "../../components/Marquee/Marquee";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <main className={homeStyles.container}>
        <Marquee />
        <Stack />
      </main>

      <Footer />
    </>
  );
}
