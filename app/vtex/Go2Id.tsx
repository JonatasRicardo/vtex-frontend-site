"use client";
import { useContext, ComponentProps } from 'react';
import Button from '../components/blocks/Button/Button';
import { Context } from './PageContext';

interface Go2IdProps extends ComponentProps<typeof Button> {
    destination: string
}

export default function Go2Id(props: Go2IdProps) {
    const { scrollToId } = useContext(Context);

    const goToSomeId = () => {
        scrollToId(props.destination);
    }
    return (
        <Button onClick={goToSomeId} {...props}>
            {props.children}
        </Button>
    )
}