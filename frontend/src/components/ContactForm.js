import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        telephone: "",
        projet: "",
        budget: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formErrors = {};
        if (!formData.nom) formErrors.nom = "Veuillez remplir ce champ.";
        if (!formData.telephone) formErrors.telephone = "Veuillez remplir ce champ.";
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setStatus("Envoi en cours...");
        try {
            const response = await fetch("http://13.48.160.132:3003/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setStatus("Message envoyé !");
                setFormData({
                    nom: "",
                    prenom: "",
                    telephone: "",
                    projet: "",
                    budget: "",
                    message: "",
                });
            } else {
                setStatus(result.error || "Erreur lors de l'envoi.");
            }
        } catch (error) {
            setStatus("Erreur réseau.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 md:px-20 md:pb-20 md:pt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full max-w-4xl bg-white shadow-lg md:rounded-lg overflow-hidden">
                {/* Colonne de gauche - Infos de contact */}
                <div className="bg-slate-900 text-white p-8 space-y-6 md:col-span-1">
                    <h2 className="text-3xl font-semibold">Contactez-nous</h2>
                    <p className="text-gray-200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae rhoncus nulla. Morbi vitae vestibulum neque. Cras blandit est et mauris dignissim faucibus. Sed tempor ex ligula, id commodo neque consequat non. Nulla lacinia libero ut tellus vulputate eleifend. Ut ut cursus metus. 
                    </p>
                    <div>
                        <ul className="space-y-5">
                            <li>📍 Av. Gustave Eiffel, 75007 Paris </li>
                            <li>📞 01 92 70 12 39</li>
                            <li>🕒 24/7</li>
                        </ul>
                    </div>
                </div>

                {/* Colonne de droite - Formulaire */}
                <div className="space-y-6 p-8 md:col-span-2">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="nom" className="block text-sm text-gray-700 font-bold uppercase">Nom</label>
                                <input
                                    type="text"
                                    name="nom"
                                    value={formData.nom}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full px-4 py-2 border ${errors.nom ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                                />
                                {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
                            </div>
                            <div>
                                <label htmlFor="prenom" className="block text-sm text-gray-700 uppercase font-bold">Prénom</label>
                                <input
                                    type="text"
                                    name="prenom"
                                    value={formData.prenom}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </div>
                        <div className="h-6"></div>  {/*saut de ligne*/}
                        <div>
                            <label htmlFor="telephone" className="block text-sm text-gray-700 font-bold uppercase">Numéro de téléphone</label>
                            <input
                                type="tel"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div className="h-6"></div> 
                        <div>
                            <label htmlFor="projet" className="block text-sm text-gray-700 font-bold uppercase">Projet</label>
                            <input
                                type="text"
                                name="projet"
                                value={formData.projet}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div className="h-6"></div>
                        <div>
                            <label htmlFor="budget" className="block text-sm text-gray-700 font-bold uppercase">Budget</label>
                            <input
                                type="text"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div className="h-6"></div>
                        <div>
                            <label htmlFor="message" className="block text-sm text-gray-700 font-bold uppercase">Votre message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                rows="5"
                            />
                        </div>
                        <div className="h-10"></div>
                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none"
                            >
                                Envoyer le message
                            </button>
                        </div>
                    </form>
                    <div className="text-center text-gray-700 mt-4">{status}</div>
                    </div>
            </div>
        </div>
    );
};

export default ContactForm;