import Hero from "./Hero";
import Header from "./Header";
import MainInformations from "./MainInformations";

export default function VTEX() {
  return (
    <main className="w-screen flex flex-col items-center bg-contain bg-no-repeat bg-hero bg-navy  md:bg-hero-desktop">
      <Header />
      <Hero />
      <MainInformations />
    </main>
  );
}
