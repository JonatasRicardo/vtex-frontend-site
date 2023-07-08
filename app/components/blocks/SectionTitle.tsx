import type { ComponentProps } from 'react';

export default function SectionTitle({ children, className = '', ...props }: ComponentProps<'h2'>) {
    return (
        <h2 className={`text-green text-2xl md:text-3xl lg:text-4xl ${className}`} {...props}>
            {children}
        </h2>
    )

}