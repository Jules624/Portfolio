import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useMediaQuery } from 'react-responsive';

const avis = [
    { id: 1, nom: "Jean Dupont", note: 5, commentaire: "Super service !" },
    { id: 2, nom: "Marie Curie", note: 4, commentaire: "Très bien, mais un peu cher." },
    { id: 3, nom: "Albert Einstein", note: 5, commentaire: "Excellente qualité !" },
    { id: 4, nom: "Isaac Newton", note: 4, commentaire: "J’aime beaucoup le concept." },
    { id: 5, nom: "Nikola Tesla", note: 5, commentaire: "Incroyable expérience." },
    { id: 6, nom: "Ada Lovelace", note: 5, commentaire: "Très innovant." },
    { id: 7, nom: "Leonard de Vinci", note: 4, commentaire: "Joli design !" },
    { id: 8, nom: "Steve Jobs", note: 5, commentaire: "Top du top !" },
    { id: 9, nom: "Elon Musk", note: 4, commentaire: "Très futuriste." },
    { id: 10, nom: "Bill Gates", note: 5, commentaire: "Je recommande fortement." },
];

function GoogleReviewsCarousel() {
    //const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    let slidesToShow = 1;
    if (isTablet) {
        slidesToShow = 3;
    } else if (isDesktop) {
        slidesToShow = 5;
    }

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        slidesToScroll: 1,
        containScroll: "trimSnaps",
        dragFree: false,
        draggable: true,
        startIndex: 0,
        inViewThreshold: 0.8,
        skipSnaps: false,
    });

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        const interval = setInterval(scrollNext, 3000);
        return () => clearInterval(interval);
    }, [scrollNext]);

    // Fonction pour calculer la moyenne des étoiles
    const calculerMoyenneEtoiles = () => {
        if (avis.length === 0) return 0;
        const totalNotes = avis.reduce((sum, avi) => sum + avi.note, 0);
        return (totalNotes / avis.length).toFixed(1); // Arrondi à 1 chiffre après la virgule
    };

    const moyenneEtoiles = calculerMoyenneEtoiles();

    return (
        <div className="embla">
            {/* Section affichant la moyenne des avis */}
            <div className="text-center mb-4">
                <h2 className="text-white text-2xl font-semibold">Avis Clients</h2>
                <div className="flex justify-center items-center mt-2">
                    <span className="text-yellow-500 text-xl font-bold">{moyenneEtoiles}</span>
                    <div className="ml-2">
                        {[...Array(Math.round(moyenneEtoiles))].map((_, i) => (
                            <span key={i} className="text-yellow-500 text-lg">★</span>
                        ))}
                        {[...Array(5 - Math.round(moyenneEtoiles))].map((_, i) => (
                            <span key={i} className="text-gray-300 text-lg">★</span>
                        ))}
                    </div>
                </div>
                <p className="text-gray-200 mb-8">{avis.length} avis</p>
            </div>

            {/* Carrousel des avis */}
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container flex">
                    {avis.map((avi) => (
                        <div
                            className={`embla__slide flex justify-center items-center`}
                            key={avi.id}
                            style={{ flex: `0 0 ${100 / slidesToShow}%` }}
                        >
                            <div className={`bg-white p-6 rounded-lg shadow-md w-3/4 md:w-1/2 ${isDesktop ? 'lg:w-3/5 lg:p-8' : ''}`} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <h3 className={`text-xl font-semibold mb-2 ${isDesktop ? 'lg:text-2xl' : ''}`}>{avi.nom}</h3>
                                <div className="flex mb-2">
                                    {[...Array(avi.note)].map((_, i) => (
                                        <span key={i} className="text-yellow-500">
                                            ★
                                        </span>
                                    ))}
                                    {[...Array(5 - avi.note)].map((_, i) => (
                                        <span key={i} className="text-gray-300">
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <p className={`text-gray-700 flex-grow ${isDesktop ? 'lg:text-lg' : ''}`}>{avi.commentaire}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GoogleReviewsCarousel;
