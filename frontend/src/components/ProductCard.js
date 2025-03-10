import { ShoppingCart } from "lucide-react";

export default function ProductCard({ image, title, price, description }) {
    return (
        <div className="bg-white p-4 rounded shadow relative">
            {/* Icône panier en haut à droite (plus visible) */}
            <div className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full cursor-pointer shadow-lg">
                <ShoppingCart size={24} />
            </div>

            <img src={image} alt={title} className="w-full object-cover rounded" />
            <div className="flex justify-between items-center font-bold mt-2">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-black">{price}</p>
            </div>
            <p className="text-gray-500">{description}</p>

            {/* Bouton ajouter au panier
            <button className="mt-3 flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded w-full">
                <ShoppingCart size={20} />
                Ajouter au panier
            </button> */}
        </div>
    );
}
