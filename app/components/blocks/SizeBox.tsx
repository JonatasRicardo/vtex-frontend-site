import type { ComponentProps } from 'react';

export default function SizeBox({ children, className = '', ...props }: ComponentProps<'div'>) {
    return (
        <div className={`border border-blue relative p-4 ${className}`} {...props}>
            <div className="absolute -top-1 -right-1 border-blue border bg-white w-2 h-2" />
            <div className="absolute -top-1 -left-1 border-blue border bg-white w-2 h-2" />
            <div className="absolute -bottom-1 -right-1 border-blue border bg-white w-2 h-2" />
            <div className="absolute -bottom-1 -left-1 border-blue border bg-white w-2 h-2" />
            {children}
        </div>
    )

}