
import type { ComponentProps, ReactElement } from 'react';
import Image from 'next/image';

interface InfoIconProps {
    label: string;
    icon: ReactElement;
}

function InfoIcon({
    label,
    icon
}: InfoIconProps) {
    return (
        <li className="flex flex-col items-center text-center flex-1 px-2 lg:flex-row lg:mb-6">
            <span className="scale-75 lg:scale-100 lg:w-20">{icon}</span>
            <span className="text-green lg:ml-4">{label}</span>
        </li>
    )
}

export default function MainIformations() {
    return (
        <div className="container pt-8 flex justify-between flex-col lg:flex-row lg:pt-16">
            <div>
                <ul className="flex lg:flex-col">
                    <InfoIcon
                        icon={
                            <Image
                                src="/img/icon-books.svg"
                                width={57}
                                height={64}
                                alt=""
                                aria-label="ícone de três livros em pé. Um ao lado do outro. O livro do meio está inclidado."
                            />
                        }
                        label="43 aulas práticas"
                    />
                    <InfoIcon
                        icon={
                            <Image
                                src="/img/icon-file-code.svg"
                                width={48}
                                height={67}
                                alt=""
                                aria-label="ícone de uma folha com um trecho de código dentro. São dois sinais: 'menor que' e 'maior que'"
                            />
                        }
                        label="Montamos uma loja juntos"
                    />
                    <InfoIcon
                        icon={
                            <Image
                                src="/img/icon-mouse.svg"
                                width={46}
                                height={67}
                                alt=""
                                aria-label="ícone de um mouse simples com dois botões"
                            />
                        }
                        label="Reveja quantas vezes quiser"
                    />
                </ul>
            </div>
            <figure className="p-5 lg:p-0" role="figure" aria-labelledby="lojistas-agencias">
                <Image
                    src="/img/vcurso-vtex-io-para-lojistas-e-agencias-lg.svg"
                    width={908}
                    height={431}
                    alt=""
                    aria-labelledby="lojistas-agencias"
                    className="hidden lg:inline-flex"
                />
                <Image
                    src="/img/vcurso-vtex-io-para-lojistas-e-agencias-sm.svg"
                    width={560}
                    height={735}
                    alt=""
                    aria-labelledby="lojistas-agencias"
                    className="lg:hidden mt-10"
                />
                <div id="lojistas-agencias" className="sr-only">
                    <h3>Para Lojjistas:</h3>
                    <ul>
                        <li>Independência: Tenha seu próprio time de devs VTEX</li>
                        <li>Agilidade: inove e fique sempre um passo à frente da concorrência</li>
                    </ul>
                    <h3>Para Agências e Lojistas</h3>
                    <ul>
                        <li>Menos riscos: preserve o conhecimento técnico do time</li>
                        <li>Auto-onboarding: Economize tempo e dinheiro</li>
                    </ul>
                    <h3>Para Agências</h3>
                    <ul>
                        <li>Venda mais: escale sua capacidade de entrega</li>
                        <li>VTEX IO: crie produtos exclusivos dentro da plataforma</li>
                    </ul>
                </div>
            </figure>
        </div>
    )
}