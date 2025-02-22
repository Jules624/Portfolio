import { useEffect, useRef } from "react";
import Carousel from "../components/Carousel";
import Section from "../components/Section";
import GoogleReviewsCarousel from "../components/GoogleReviewsCarousel";

export default function Home() {
    return (
        <div className="bg-gray-100 w-screen max-w-none mx-0 px-0">
            <Carousel />

            <div className="mt-12 md:mt-20">
                <Section
                    title="Solution artisanale"
                    subtitle="Façonnez votre intérieur avec nos solutions d'agencements sur-mesure ! "
                    text="Chez La Belle Grume, nous sommes passionnés par la menuiserie artisanale, et cet amour pour notre métier se reflète dans chaque agencement que nous créons. Grâce à notre expérience de 11 ans dans le domaine, nous avons acquis un savoir-faire unique qui nous permet de concevoir des meubles sur mesure exceptionnels, imprégnés d’une histoire et d’une signification profondes. Nous croyons fermement que chaque pièce de mobilier doit être conçue avec soin et attention aux détails, afin de garantir la qualité et la longévité de nos créations. Nous sommes fiers de travailler avec des matériaux et des quincailleries de la plus haute qualité et de mettre en valeur le caractère unique de chaque pièce de bois. Chez La Belle Grume, nous nous engageons à offrir un service personnalisé à chaque client, en écoutant attentivement leurs besoins et en créant des meubles sur mesure qui répondent à leurs attentes."
                    image="https://images.unsplash.com/photo-1593642532973-d31b6557fa68"
                    //reverse={1}
                />
                
                <div className="mt-12 md:mt-20 bg-gray-800 w-screen max-w-none mx-0 px-0">
                    <GoogleReviewsCarousel />
                </div>
            </div>
        </div>
    );
}
