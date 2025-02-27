import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header />
            <main className="w-screen mx-0 px-0 bg-gray-50">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
