import React, { useState, useEffect } from 'react'
import './ScrollUpButton.css';
import { Icon } from "react-icons-kit";
import {ic_keyboard_arrow_up} from 'react-icons-kit/md/ic_keyboard_arrow_up'


interface Props {

    minScrolled?: number,

    top?: string,
    right?: string,
    bottom?: string,
    left?: string,

    zIndex?: number,

    icon?: React.ReactNode,
    text?: string,

    className?: string,
}

const ScrollUpButton = ({
    minScrolled = 250,
    top = 'unset',
    right = '10px',
    bottom = '65px',
    left = 'unset',
    zIndex = 999,
    icon = <Icon icon={ic_keyboard_arrow_up} />,
    
    className = 'scrollUpButtonCSS'
}: Props) => {

    //distance from top
    const [scrollTop, setScrollTop] = useState<number>(0);

    //keep track of position from top
    useEffect(() => {
        const onScroll = (e: any) => {
            setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);


    //scrolls page to top
    const scrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };


    if (scrollTop > minScrolled) {
        return (
            <button
                onClick={scrollToTop}
                className={className}

                style={{
                    position: 'fixed',
                    top,
                    right,
                    bottom,
                    left,
                    zIndex,
                }}

            >

                {icon && icon}
                
                
            </button>
        )
    }
    return null

}

export default ScrollUpButton
