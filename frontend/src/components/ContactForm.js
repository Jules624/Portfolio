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
    const [loading, setLoading] = useState(false); // ✅ Nouvel état pour désactiver le bouton

    const API_URL = process.env.REACT_APP_API_URL || "http://13.48.160.132:3003"; // ✅ Variable d'environnement

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" }); // Réinitialiser les erreurs quand l'utilisateur tape
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("");
        setLoading(true); // ✅ Désactiver le bouton pendant l'envoi

        let formErrors = {};
        if (!formData.nom) formErrors.nom = "Veuillez remplir ce champ.";
        if (!formData.telephone) formErrors.telephone = "Veuillez remplir ce champ.";

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setStatus("✅ Message envoyé avec succès !");
                setFormData({
                    nom: "",
                    prenom: "",
                    telephone: "",
                    projet: "",
                    budget: "",
                    message: "",
                });
            } else {
                setStatus(`❌ Erreur : ${result.error || "Échec de l'envoi."}`);
            }
        } catch (error) {
            setStatus("❌ Erreur réseau, veuillez réessayer.");
        } finally {
            setLoading(false); // ✅ Réactiver le bouton après la requête
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-6 py-12">
            <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Contactez-nous</h2>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold uppercase text-gray-700">Nom</label>
                            <input
                                type="text"
                                name="nom"
                                value={formData.nom}
                                onChange={handleChange}
                                className={`mt-1 block w-full px-4 py-2 border ${errors.nom ? "border-red-500" : "border-gray-300"} rounded-md`}
                            />
                            {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-bold uppercase text-gray-700">Prénom</label>
                            <input
                                type="text"
                                name="prenom"
                                value={formData.prenom}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-bold uppercase text-gray-700">Téléphone</label>
                        <input
                            type="tel"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            className={`mt-1 block w-full px-4 py-2 border ${errors.telephone ? "border-red-500" : "border-gray-300"} rounded-md`}
                        />
                        {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>}
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-bold uppercase text-gray-700">Projet</label>
                        <input
                            type="text"
                            name="projet"
                            value={formData.projet}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-bold uppercase text-gray-700">Budget</label>
                        <input
                            type="text"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-bold uppercase text-gray-700">Votre message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                            rows="4"
                        />
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-700 disabled:bg-gray-400"
                            disabled={loading} // ✅ Désactiver le bouton pendant l'envoi
                        >
                            {loading ? "Envoi en cours..." : "Envoyer le message"}
                        </button>
                    </div>
                </form>

                {status && (
                    <div className="text-center mt-4 text-gray-700">
                        {status}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactForm;
