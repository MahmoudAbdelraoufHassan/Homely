import { GlobalStyles } from "../styles/styles";
import "swiper/css";
import Footer from "../ui/Footer"
import Navbar from "../ui/Navbar"
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import LoadingPage from "../ui/LoadingPage";
import { useEffect } from "react";
import { useProperties } from "../features/Properties/useProperties";

function AppLayout() {
    const navigation = useNavigation();
    const location = useLocation();
    const Properties = useProperties();
 const isLoading = navigation.state === "loading" || Properties.isLoading;
    useEffect(()=> {
        window.document.title = location.pathname !== "/" ? location.pathname.replace("/" , "") : "Homely"
    } , [location.pathname])
   
    if(isLoading)  return (
    <>
    <GlobalStyles />
    <LoadingPage />
    </>
    ) 
    return (
        <>
           <GlobalStyles /> 
           <Navbar />
           <Outlet />
           <Footer />
        </>
    )
}

export default AppLayout
