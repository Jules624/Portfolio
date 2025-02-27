export default function SectionImageTexte({ title, subtitle, text, image, reverse = false }) {
    return (
        <div className="flex justify-center items-center min-h-screen px-6">
            <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-24 max-w-6xl w-full`}>
                
                {/* Texte */}
                <div className="flex-1 max-w-lg text-center md:text-left">
                    <h2 className="uppercase text-sm tracking-widest text-gray-500 font-bold mb-2">{title}</h2>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{subtitle}</h3>
                    <p className="text-gray-700 leading-relaxed">{text}</p>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center">
                    <img 
                        src={image} 
                        alt={subtitle ? `${title} - ${subtitle}` : title} 
                        className="max-w-ld w-full rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}
