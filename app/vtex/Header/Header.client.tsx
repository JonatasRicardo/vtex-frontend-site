"use client";
import { ReactNode, useEffect, useRef, useState, useMemo } from 'react';
import useScrollPosition from '@/app/utils/hooks/useScrollPosition';


export default function HeaderClient(props: { children: ReactNode }) {
    const scroll = useScrollPosition();
    const headerRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    
    useEffect(() => {
        const headerHeight = headerRef?.current?.clientHeight;
        if(!headerHeight) return;
        if (scroll >= (headerHeight/2) && !isSticky) {
            setIsSticky(true);
        } else if(scroll < (headerHeight/2) && isSticky) {
            setIsSticky(false);
        }
    }, [scroll, isSticky]);

    const stickyClasses = useMemo(() => {
        if (isSticky) return 'bg-navy/70 backdrop-blur-md';
        return 'bg-navy/00';
    }, [isSticky]);

    return (
        <header id="header" ref={headerRef} className={`${stickyClasses} transition-all w-screen z-20 fixed top-0  flex justify-center items-center px-4 xl:px-0 h-header-mobile md:h-header-desktop`}>
            <div className="container flex justify-between items-center">
                <div className='w-8/12'>
                    {props.children}
                </div>
                <a href="https://vtexdevfrontendparaplataformav.club.hotmart.com/index" target="_blank" className="text-white">
                    login
                </a>
            </div>
        </header>
    )
}