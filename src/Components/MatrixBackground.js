import React, { useEffect, useRef } from "react";

const CHARACTERS = "!@#$%^&*()_+-=[]{}|;:,.<>?/abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function MatrixBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const columns = () => Math.floor(canvas.width / 12);
        const drops = Array(columns()).fill(0);

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "hsla(240, 100%, 65%, 1.00)";
            ctx.font = "12px monospace";

            for (let i = 0; i < drops.length; i++) {
                const char = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
                ctx.fillText(char, i * 12, drops[i] * 12);
                if (drops[i] * 12 > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }

            animationId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="matrix-bg" />;
}