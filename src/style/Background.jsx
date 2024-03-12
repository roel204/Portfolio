import './blobs.scss'
import {useEffect, useRef} from "react";

const Background = () => {
    const interactiveRef = useRef(null);

    useEffect(() => {
        const interactive = interactiveRef.current;

        let currentX = 0;
        let currentY = 0;
        let mouseX = 0;
        let mouseY = 0;

        function move() {
            currentX += (mouseX - currentX) / 20;
            currentY += (mouseY - currentY) / 20;
            interactive.style.transform = `translate(${Math.round(currentX)}px, ${Math.round(currentY)}px)`;
            requestAnimationFrame(() => {
                move();
            });
        }

        window.addEventListener('mousemove', (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        });

        move();
    },[]);

    return (
        <div className="gradient-bg">
            <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo"/>
                        <feBlend in="SourceGraphic" in2="goo"/>
                    </filter>
                </defs>
            </svg>
            <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                <div className="interactive" ref={interactiveRef}></div>
            </div>
        </div>
    );
};

export default Background;