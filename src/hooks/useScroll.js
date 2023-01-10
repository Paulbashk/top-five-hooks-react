import { useEffect, useRef } from "react";

const useScroll = (ref, callback) => {
    const observer = useRef();

    useEffect(() => {
        const node = ref.current;

        observer.current = new IntersectionObserver(([target]) => {
            if(target.isIntersecting) {
                callback();
            }
        });
        
        observer.current.observe(node);

        return function() {
            observer.current.unobserve(node);
        }
    }, 
    [callback, ref]);
}

export default useScroll;