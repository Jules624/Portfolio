import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

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
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

    // Fonction pour faire défiler automatiquement
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        const interval = setInterval(scrollNext, 2000); // Défilement toutes les 2s
        return () => clearInterval(interval);
    }, [scrollNext]);

    return (
        <div className="relative w-full overflow-hidden py-6 bg-gray-800">
            {/* Conteneur des avis Google centré avec 90% de largeur */}
            <div className="w-[90%] mx-auto overflow-hidden" ref={emblaRef}>
                <div className="flex pl-[15px] pr-[15px] gap-x-[30px]">
                    {avis.map((review, index) => (
                        <div
                            key={review.id}
                            className={`flex-[0_0_100%] md:flex-[0_0_20%] p-4 bg-white shadow-md rounded-lg mx-2 h-[200px] flex flex-col justify-between 
                            ${index === 0 ? "ml-[15px]" : ""}`}
                        >
                            <h3 className="font-bold">{review.nom}</h3>
                            <p className="text-yellow-500">⭐ {review.note}</p>
                            <p className="text-gray-600 text-sm">{review.commentaire}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    
}

export default GoogleReviewsCarousel;
