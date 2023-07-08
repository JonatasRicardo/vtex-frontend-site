import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-lightGray w-full flex flex-col items-center justify-center border-0 border-t border-dashed border-navy py-20">
            <Image
                src="/img/logo-ensinando-tech.svg"
                width={200}
                height={50}
                alt="Ensinando.tech"
            />
            <div className="flex justify-center items-center pt-14 gap-2">
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
            </div>
        </footer>
    )
}