import Image from 'next/image'

export default function Header() {
    return (
        <header className="container z-10 fixed flex justify-between items-center px-4 xl:px-0 h-header-mobile md:h-header-desktop">
            <div className='w-8/12'>
            <h1 className="max-w-[200px] md:max-w-[400px] lg:max-w-[500px] ">
                <Image
                    src="/img/logo-vtex-front-end.svg"
                    alt="Curso VTEX Front End"
                    width={500}
                    height={50}
                    priority
                    className="w-full"
                />
            </h1>

            </div>
            <button>
                login
            </button>
        </header>
    )
}