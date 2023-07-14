import type { ComponentProps } from 'react';
import Button from '../components/blocks/Button';
import Terminal from '../components/blocks/Terminal';
import Go2Price from './Go2Price';

interface ListItemProps extends ComponentProps<"li"> {
    tag: string
}

function ListItem (props:ListItemProps ) {
    return (
        <li className="text-white mb-3 text-sm lg:basis-1/2 lg:text-lg lg:mb-6">
            <span className="text-green">{'> '}</span> 
            <strong>{props.tag} - </strong>
            <span className="text-white/80">{props.children}</span>
        </li>
    )

}

export default function CourseContent() {
    return (
        <div className="container py-16 pl-4 lg:px-0">
            <Terminal>
                <h2 className="text-2xl pb-4"># Por dentro do curso</h2>
                <p className="text-sm lg:text-lg">Nosso curso de VTEX IO e CMS vai te mostrar o caminho e os atalhos do desenvolvimento na plataforma VTEX.</p>
                <ul className="py-4 mt-2 flex flex-col lg:flex-row lg:flex-wrap lg:mt-4">
                    <ListItem tag="VTEX IO">conceitos chave (2 aulas)</ListItem>
                    <ListItem tag="VTEX IO">Criando uma loja com componentes nativos (9 aulas)</ListItem>
                    <ListItem tag="VTEX IO">APPs Customizados (2 aulas)</ListItem>
                    <ListItem tag="VTEX IO/CMS">Checkout (8 aulas)</ListItem>
                    <ListItem tag="VTEX CMS">Principais Componentes (5 aulas)</ListItem>
                    <ListItem tag="VTEX CMS">PLP - Páginas de Listagem de Produtos (7 aulas)</ListItem>
                    <ListItem tag="VTEX CMS">PDP - Páginas de Detalhe de Produtos (7 aulas)</ListItem>
                </ul>
                <div className="flex justify-center">
                    <Go2Price className="mt5 mb-4 mt-10 lg:mt-8 lg:mb-16 self-center">Quero experimentar grátis</Go2Price>
                </div>
            </Terminal>
        </div>
    )

}