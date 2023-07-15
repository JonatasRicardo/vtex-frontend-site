import Hero from "./Hero";
import Header from "./Header";
import MainInformations from "./MainInformations";
import CourseContent from "./CourseContent";
import Instructor from "./Instructor";
import Customers from "./Customers";
import Pricing from "./Pricing";
import Warrant from "./Warrant";
import Contact from "./Contact";
import Footer from "./Footer";
import { Provider } from "./PageContext";
import FullVideo from "../components/blocks/FullVideo";

export default function VTEX() {
  return (
    <Provider>
      <main className="flex flex-col items-center bg-contain bg-no-repeat bg-hero bg-navy  md:bg-hero-desktop 3xl:bg-cover 3xl:bg-hero-xl-desktop 3xl:bg-[center_top]">
        <Header />
        <Hero />
        <MainInformations />
        <CourseContent />
        <Instructor />
        <Customers />
        <Pricing />
        <Warrant />
        <Contact />
        <Footer />
        <FullVideo />
      </main>
    </Provider>
  );
}
