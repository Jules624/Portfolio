require('dotenv').config();

console.log("📩 Gmail User:", process.env.GMAIL_USER);
console.log("🔑 Gmail Pass:", process.env.GMAIL_PASS ? "*******" : "⚠️ Manquant !");

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
const corsOptions = {
    origin: ['http://localhost:3000', 'http://13.48.160.132', 'http://13.48.160.132:3003'], // Ajout du port 3003
    methods: 'GET,POST,OPTIONS', // Ajout de la méthode OPTIONS
    allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));

app.post('/api/contact', async (req, res) => {
    console.log(req.body);
    const { nom, prenom, telephone, budget, projet, message } = req.body;

    if (!nom || !prenom || !telephone || !budget || !projet || !message) {
        return res.status(400).json({ error: "Tous les champs sont requis." });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.GMAIL_USER, // L'email qui envoie
        to: process.env.GMAIL_RECEIVER, // L'email qui reçoit
        subject: "Nouveau message de contact",
        text: `Nom: ${nom} ${prenom}\nTéléphone: ${telephone}\nBudget: ${budget}\nProjet: ${projet}\nMessage: ${message}`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("📩 Email envoyé avec succès !");
        console.log("✉️ Infos de l'email :", info);
        res.status(200).json({ message: "E-mail envoyé avec succès !" });
    } catch (error) {
        console.error("❌ Erreur Nodemailer :", error);
        res.status(500).json({ error: "Erreur lors de l'envoi de l'e-mail.", details: error.message });
    }
});

// ✅ Déplacé en dehors de `app.post()`
app.listen(3003, '0.0.0.0', () => {
    console.log('Server is running on port 3003');
});


