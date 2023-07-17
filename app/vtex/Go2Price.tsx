"use client";
import { useContext, ComponentProps } from 'react';
import Button from '../components/blocks/Button/Button';
import { Context } from './PageContext';

export default function Go2Price(props: ComponentProps<typeof Button>) {
    const { scrollToId } = useContext(Context);

    const goToPrice = () => {
        scrollToId('price');
    }
    return (
        <Button onClick={goToPrice} {...props}>
            {props.children}
        </Button>
    )
}