import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header />
            <main className="p-4 bg-gray-50">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
