import {type FunctionComponent, useEffect, useRef} from "react";
import Typed from "typed.js";

interface Props {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    loop?: boolean;
}

const TypedTextComponent: FunctionComponent<Props> = (
    {
        strings,
        typeSpeed = 100,
        backSpeed = 50,
        loop = true
    }: Props
) => {
    const el = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!el.current) return;

        const typed = new Typed(el.current, {
            strings,
            typeSpeed,
            backSpeed,
            loop,
        });

        return () => typed.destroy(); // nettoyage
    }, [strings, typeSpeed, backSpeed, loop]);

    return <span ref={el}></span>;
}

export default TypedTextComponent;