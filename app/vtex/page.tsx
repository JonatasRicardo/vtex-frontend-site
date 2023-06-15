import Hero from "./Hero";
import Header from "./Header";
import MainInformations from "./MainInformations";
import CourseContent from "./CourseContent";
import Instructor from "./Instructor";
import Customers from "./Customers";

export default function VTEX() {
  return (
    <main className="flex flex-col items-center bg-contain bg-no-repeat bg-hero bg-navy  md:bg-hero-desktop 2xl:bg-cover 2xl:bg-hero-xl-desktop 2xl:bg-[center_top]">
      <Header />
      <Hero />
      <MainInformations />
      <CourseContent />
      <Instructor />
      <Customers />
    </main>
  );
}
