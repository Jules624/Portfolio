import { Link } from "react-router-dom";

const VideoSection = () => {
    return (
        <div className="bg-gray-100 w-full flex flex-col items-center py-10">
            <h2 className="text-gray-800 text-3xl font-bold uppercase tracking-widest mb-4">Découvrez notre entreprise</h2>
            <div className="w-full max-w-4xl my-6 ">
                <div className="relative w-full pt-[56.25%]"> {/* Ratio 16:9 */}
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg "
                        src="https://www.youtube.com/embed/LXb3EKWsInQ"
                        title="Présentation de l'entreprise"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="relative flex flex-col items-center mt-6"></div>
                <Link
                    to="/contact"
                    className="bg-gray-800 text-white text-[15px] md:text-[15px] font-bold uppercase tracking-[4px] py-2 px-4 mt-4 rounded-lg"
                >
                    Nous contacter
                </Link>
            </div>
        </div>
    );
};

export default VideoSection;
