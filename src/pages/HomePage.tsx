import { Outlet } from "react-router";
import Footer from "../component/Footer";
import Header from "../component/Header";

export default function HomePage() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer/>
        </>
    )
}