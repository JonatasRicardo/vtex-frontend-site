import type { ComponentProps } from 'react';

export default function SectionTitle(props: ComponentProps<'h2'>) {
    return (
        <h2 className="text-green text-2xl md:text-3xl lg:text-4xl">
            {props.children}
        </h2>
    )

}