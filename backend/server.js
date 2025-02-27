require('dotenv').config();

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3003;

// 🌍 Configuration CORS
const corsOptions = {
    origin: ['http://localhost:3000', 'http://13.48.160.132'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // 🔥 Autoriser les pré-requêtes OPTIONS

// 🛠️ Middleware pour JSON et logs
app.use(express.json());
app.use((req, res, next) => {
    console.log(`🔍 Requête reçue: ${req.method} ${req.path}`);
    console.log(`📩 Headers:`, req.headers);
    next();
});

// 📩 Route de contact
app.post('/api/contact', async (req, res) => {
    console.log("📥 Données reçues:", req.body);
    
    const { nom, prenom, telephone, budget, projet, message } = req.body;
    if (!nom || !prenom || !telephone || !budget || !projet || !message) {
        return res.status(400).json({ error: "Tous les champs sont requis." });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_RECEIVER,
            subject: "Nouveau message de contact",
            text: `Nom: ${nom} ${prenom}\nTéléphone: ${telephone}\nBudget: ${budget}\nProjet: ${projet}\nMessage: ${message}`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("✅ Email envoyé avec succès !", info.response);
        res.status(200).json({ message: "E-mail envoyé avec succès !" });

    } catch (error) {
        console.error("❌ Erreur lors de l'envoi de l'email :", error);
        res.status(500).json({ error: "Erreur lors de l'envoi de l'e-mail.", details: error.message });
    }
});

// 🚀 Lancer le serveur
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Serveur démarré sur http://0.0.0.0:${PORT}`);
});
