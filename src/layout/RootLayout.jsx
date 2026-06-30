import { Outlet } from "react-router";
import Navbar from './../pages/Shared/Navbar/Navbar';
import Footer from './../pages/Shared/Footer/Footer';

import ScrollProgress from "../pages/Shared/UX/ScrollProgress";
import ScrollToTop from "../pages/Shared/UX/ScrollToTop";
import BackToTop from "../pages/Shared/UX/BackToTop";

export default function RootLayout() {
    return (
        <>
            <ScrollProgress />

            <ScrollToTop />

            <Navbar />

            <Outlet />

            <Footer />

            <BackToTop />
        </>
    );
}