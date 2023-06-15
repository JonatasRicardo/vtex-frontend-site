import Image from "next/image";
import SectionTitle from "../blocks/SectionTitle";

export default function Instructor() {

    return (
        <section className="container px-4 pb-8 lg:px-0 flex flex-wrap flex-row-reverse md:flex-row md:justify-between">
            <div className="basis-full mb-4 md:mb-8">
                <SectionTitle>Instrutor</SectionTitle>
            </div>
            <div className="basis-1/2 md:basis-9/12 md:pr-8">
                <p className="text-white text-xs md:text-xl">
                    Jonatas Santos tem 14 anos de experiência como desenvolvedor e 7 anos de implantação VTEX, contratando, liderando e treinando desenvolvedores para a plataforma.
                    <br/><br/>
                    já entregou projetos nacionais e internacionais para grandes clientes VTEX como: AB InBev, C&A, Calvin Klein, Walmart, Boticário, Bradesco,  Havaianas e agora vai treinar sua equipe.
                </p>
            </div>
            <div className="basis-1/2 pr-4 md:pr-0 md:basis-3/12 flex flex-col items-center">
                <Image
                    src="/img/foto-jonatas-santos.png"
                    alt="foto Jonatas Santos"
                    width={200}
                    height={185}
                />
                <a target="_blank" href="https://www.linkedin.com/in/jonatasricardo/" rel="noopener">
                    <Image
                        src="/img/logo-linkedin-green.svg"
                        alt="logo linkedin"
                        width={30}
                        height={30}
                        className="mt-8"
                    />
                </a>
            </div>
        </section>
    )
}