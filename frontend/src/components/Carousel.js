import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68" },
    { id: 2, src: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
    { id: 3, src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" },
];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const [isVisible, setIsVisible] = useState(0);

    useEffect(() => {
        let interval;

        // Déclenche le fade-in après un court délai pour une bonne transition
        const fadeTimeout = setTimeout(() => {
            setIsVisible(1);
        }, 300);

        const timeout = setTimeout(() => {
            setHasStarted(true);
            setCurrentIndex(1); // Commence par la deuxième image pour un rendu clean
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);
        }, 100);


        return () => {
            clearTimeout(timeout);
            clearTimeout(fadeTimeout);
            clearInterval(interval);
        };
    }, []);

    return (
        <div
            style={{ opacity: isVisible, transition: "opacity 500ms ease-in-out" }}
            className="w-screen h-[calc(100vh-64px)] relative overflow-hidden mx-0 px-0"
        >
            <div className="absolute inset-0 bg-black bg-opacity-60 z-20"></div>  {/* Overlay sombre pour le texte */}


            {images.map((image, index) => (
                <img
                    key={image.id}
                    src={image.src}
                    alt="Carrousel"
                    className={`absolute w-screen min-w-full h-full object-cover transition-opacity duration-300 ease-in-out ${index === currentIndex ? "opacity-100 z-0" : "opacity-0 z-0"
                        } ${!hasStarted && index === 0 ? "opacity-100" : ""}`}
                />
            ))}

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:justify-start md:text-left w-full md:w-1/2 md:right-0 md:left-auto md:px-10 top-1/2 transform -translate-y-1/2 z-30">
                <h1 className="text-white text-[15px] md:text-[15px] font-bold uppercase tracking-[4px] opacity-0 animate-fadeInUp [animation-delay:0ms]">Lorem ipsum dolor sit.</h1>
                <h2 className="text-zinc-400 text-[30px] md:text-[35px] font-bold mt-2 uppercase opacity-0 animate-fadeInUp [animation-delay:300ms]">Lorem ipsum dolor sit amet, consectetur.</h2>
                <p className="text-zinc-300 text-[15px] md:text-[15px] mt-2 opacity-0 animate-fadeInUp [animation-delay:600ms]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur scelerisque ante. Proin commodo gravida.  </p>

                <div className="relative inline-block p-4 group">
                    <Link
                        to="/about"
                        className="bg-white text-black text-[15px] md:text-[15px] font-bold uppercase tracking-[4px] py-2 px-4 mt-4 rounded-lg opacity-0 animate-fadeInUp [animation-delay:900ms]"
                    >
                        Nous Découvrir
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Carousel;
