import type { ComponentProps, useMemo } from 'react';


interface BoxGradientProps extends ComponentProps<"div"> {
  from?: 'rgba(255,255,255,0) 35%',
  to?: 'rgba(242,245,250,1) 35%',
  deg?: 177
}

export default function BoxGradient({ from, to, deg, children, ...props}: BoxGradientProps) {

    return (
        <div
            style={{
                background: 'linear-gradient(177deg, rgba(255,255,255,0) 50%, rgba(242,245,250,1) 50%)'
            }}
            {...props}
        >
            {children}
        </div>
    )
}