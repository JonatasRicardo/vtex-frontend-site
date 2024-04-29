import PlayButton from '../components/blocks/PlayButton';
import Button from '../components/blocks/Button/Button';
import Go2Id from './Go2Id';

export default function Hero() {

    return (
        <section
            className={`
                w-full 
                aspect-square 
                pt-[var(--header-height-mobile)]
                justify-center
                flex
                relative
                overflow-hidden

                md:aspect-[16/10]
                md:pt-[var(--header-height-desktop)] 

                lg:max-h-screen 

            `}
        >
            <div className="container px-4 xl:px-0 flex flex-col z-10">
                <div>
                    <div className="sm:w-8/12" >
                        <h1 className="text-white text-md md:text-lg lg:text-5xl leading-tight mb-4 mt-2 lg:mb-10">Curso VTEX IO: escale ou monte sua equipe!</h1>
                        <p className="text-white text-xs md:text-sm lg:text-3xl leading-tight ">
                            Com o <strong>curso de VTEX IO</strong>, inovar é mais fácil e rápido! <br/>
                        </p>
                        <ul className="text-white text-xs md:text-sm lg:text-3xl leading-tight ">
                            <li className="mt-5 ml-6 list-disc">Automatize o treinamento de novos devs</li>
                            <li className="mt-2 ml-6 list-disc">Fique a frente da concorrência</li>
                            <li className="mt-2 ml-6 list-disc"> Venda mais!</li>                            
                        </ul>
                    </div>
                </div>
                <div className="flex grow items-center justify-center">
                    <PlayButton />
                </div>

            </div>
        </section>
    )

}