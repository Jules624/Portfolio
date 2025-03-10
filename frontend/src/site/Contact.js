import ContactForm from "../components/ContactForm";
import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        document.title = "Contact | Mon Site";
    }, []);

    return (
        <div>
            <ContactForm />
        </div>
    );
}
