import { useScroll } from "framer-motion";
import { useState } from "react";
import useWindowSize from "./useWindowSize";

export default function useScrollPos(ref: React.RefObject<HTMLElement>, force: boolean): number {
    const { width } = useWindowSize();
    const [scrollPos, setScrollPos] = useState(0);
    const { scrollYProgress } = useScroll({ container: width >= 780 || force ? ref : undefined });
    scrollYProgress.onChange((latest) => {
        setScrollPos(latest);
    });
    return scrollPos;
}
