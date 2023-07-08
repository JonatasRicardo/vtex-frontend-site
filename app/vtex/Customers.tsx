import Image from "next/image";
import SectionTitle from "../components/blocks/SectionTitle";

export default function Customers() {

    const customers = [
        { src: 'img/customers/the-north-face-logo.svg', width: 200, height: 200, alt: 'The North Face' },
        { src: 'img/customers/agencia-metodo-logo.svg', width: 200, height: 200, alt: 'Metodo' },
        { src: 'img/customers/blanko-logo.svg', width: 200, height: 200, alt: 'Blanko' },
        { src: 'img/customers/numai-logo.svg', width: 200, height: 200, alt: 'Numai' },
        { src: 'img/customers/job-space-logo.svg', width: 200, height: 200, alt: 'Job Spac' },
        { src: 'img/customers/agencia-encan-logo.svg', width: 200, height: 200, alt: 'Encan' },
    ]

    return (
        <div className="self-start overflow-x-hidden w-full md:self-auto md:container">
            <SectionTitle className="mb-3  px-4 pb-4 md:px-0">Já treinamos</SectionTitle>
            <section className="overflow-scroll max-w-full px-4 pb-8 md:px-0 md:overflow-hidden">
                <div className="flex w-max  md:justify-between border-dashed border-white border-2 p-4 md:w-full">
                    {customers.map(customer => (
                        <div key={customer.src} className="flex justify-center w-32 grow-0 shrink-0 p-3 md:shrink-1 md:w-24 lg:w-36">
                            <Image
                                key={customer.src}
                                {...customer}
                                className="w-full"
                            />
                        </div>
                    ))}
                </div>

            </section>
        </div>
    )
}