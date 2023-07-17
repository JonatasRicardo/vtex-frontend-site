import Image from "next/image";
import LinkButton from "./components/blocks/Button/LinkButton";

export default function Home() {
    return (
        <main className="w-full min-h-screen h-full flex flex-col items-center">
          <header className="py-20">
            <h1>
              <Image
                src="/img/logo-ensinando-tech.svg"
                width={200}
                height={50}
                alt="Ensinando.tech"
              />
            </h1>

          </header>

          <div className="container max-w-md px-5  flex flex-col justify-center gap-8">
            <LinkButton href="/vtex" color="navy" className="w-full">Treinamento Vtex</LinkButton>
            <LinkButton href="/whatsapp" color="green" className="w-full">WhatsApp</LinkButton>
          </div>
          
          <footer className="flex justify-center items-center pt-14 gap-2">
                <a href="https://www.youtube.com/@ensinandotech2324" target="_blank">
                    <Image
                        src="/img/logo-youtube.svg"
                        width={40}
                        height={40}
                        alt="Ensinando.tech"
                    />
                </a>
                <a href="https://www.linkedin.com/company/ensinando-tech/" target="_blank">
                    <Image
                        src="/img/logo-linkedIn.svg"
                        width={30}
                        height={30}
                        alt="Ensinando.tech"
                    />
                </a>
            </footer>
        </main>
    )
}