import Image from 'next/image'

export default function HeaderServer() {
    return (
        <h1 className="max-w-[200px] md:max-w-[400px] lg:max-w-[500px]">
            <Image
                src="/img/logo-vtex-front-end.svg"
                alt="Curso VTEX Front End"
                width={500}
                height={50}
                priority
                className="w-full"
            />
        </h1>
    )
}