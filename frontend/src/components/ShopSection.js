import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function ShopSection() {
    const [cart, setCart] = useState([]); 
    const [isCartOpen, setIsCartOpen] = useState(false); // Gère l'affichage du menu

    const products = [
        {
            image: "https://images.unsplash.com/photo-1526344966-89049886b28d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Cerisier",
            price: "99",
            description: "Cerisiers en fleur"
        },
        {
            image: "https://images.unsplash.com/photo-1620062110593-4b3c37545aff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Dragon",
            price: "120",
            description: "Dragon mystique"
        },
        {
            image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "New York",
            price: "310",
            description: "Wall street"
        },
        {
            image: "https://images.unsplash.com/photo-1735615479436-6a697c3e0d48?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Windows 11",
            price: "250",
            description: "Windows 11 Premium"
        },
        {
            image: "https://images.unsplash.com/photo-1740680209909-d43c99265d3b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Sand",
            price: "88",
            description: "Souls Sand"
        },
        {
            image: "https://images.unsplash.com/photo-1724582980082-6753d3c54ede?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Slave cliff",
            price: "370",
            description: "Lake above the ocean"
        },
        {
            image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Bondi Beach",
            price: "190",
            description: "Bondi Beach, Australia"
        },
        {
            image: "https://images.unsplash.com/photo-1503431128871-cd250803fa41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Black cat",
            price: "110",
            description: "Black cat"
        },
        {
            image: "https://images.unsplash.com/photo-1741560440913-aced12c20177?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "White Sands",
            price: "470",
            description: "New Mexico"
        },
    ];


// Fonction pour ajouter un produit au panier
const addToCart = (product) => {
    setCart([...cart, product]);
};

return (
    <div className="relative">
        {/* Icône du panier */}
        <div className="fixed top-20 right-4 z-50">
            <button 
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded flex items-center gap-2 relative shadow-xl"
                onClick={() => setIsCartOpen(!isCartOpen)}
            >
                <ShoppingCart size={24} />
                <span>{cart.length}</span>
            </button>

            {/* Listing du panier (menu déroulant) */}
            {isCartOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded p-4 z-50">
                    <h3 className="text-lg font-bold mb-2">Panier</h3>
                    {cart.length === 0 ? (
                        <p className="text-gray-500">Votre panier est vide.</p>
                    ) : (
                        <ul className="space-y-2">
                            {cart.map((item, index) => (
                                <li key={index} className="flex justify-between items-center border-b pb-2">
                                    <img src={item.image} alt={item.title} className="w-10 h-10 object-cover rounded" />
                                    <span className="text-sm">{item.title}</span>
                                    <span className="text-sm font-bold">{item.price}$</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>

        {/* Liste des produits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mr-3 ml-3">
            {products.map((product, index) => (
                <div key={index} className="bg-white p-4 rounded shadow relative">
                    <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded" />
                    <div className="flex justify-between items-center font-bold">
                        <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                        <p className="text-lg font-bold">{product.price}$</p>
                    </div>
                    <p className="text-gray-500">{product.description}</p>
                    
                    <div className="flex flex-col gap-2 mt-3">
                        <button 
                            className="bg-gray-800 text-white px-4 py-2 rounded"
                            onClick={() => window.open(product.image, '_blank')}
                        >
                            Voir le produit
                        </button>

                        {/* Bouton Ajouter au panier */}
                        <button 
                            className="flex items-center justify-center gap-2 bg-gray-600 text-white px-4 py-2 rounded"
                            onClick={() => addToCart(product)}
                        >
                            <ShoppingCart size={20} />
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}