import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        document.title = "A propos | Mon Site";
    }, []);

    return (
        <h1>A propos</h1>
    );
}
