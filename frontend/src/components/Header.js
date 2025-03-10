import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();

    return (
        <header className="bg-white text-zinc-700 p-4 flex flex-col md:flex-row justify-center md:justify-between items-center w-full animate-fadeInDown delay-500">
            <h1 className="text-center md:text-left text-xl md:text-2xl font-inter font-bold uppercase">
                Lorem ipsum
            </h1>
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 mt-3 md:mt-0">
                <Link to="/" className={`block ${location.pathname === '/' ? 'underline font-bold' : ''} hover:underline text-sm md:text-[15px] font-inter uppercase`} >Accueil</Link>
                <Link to="/about" className={`block ${location.pathname === '/about' ? 'underline font-bold' : ''} hover:underline text-sm md:text-[15px] font-inter uppercase`} >A propos</Link>
                <Link to="/boutique" className={`block ${location.pathname === '/boutique' ? 'underline font-bold' : ''} hover:underline text-sm md:text-[15px] font-inter uppercase`} >Boutique</Link>
                <Link to="/contact" className={`block ${location.pathname === '/contact' ? 'underline font-bold' : ''} hover:underline text-sm md:text-[15px] font-inter uppercase`} >Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
