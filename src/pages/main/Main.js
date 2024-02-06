import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { BubblyContainer } from "react-bubbly-transitions";
import SidebarToggler from "../../components/SidebarToggler/SidebarToggler";
import Sidebar from "../../components/sidebar/Sidebar";
import Home from "../home/Home";
import HtmlCssPage from "../htmlCss/HtmlCssPage";
import JavaScriptPage from "../javascript/JavaScriptPage";
import ReactPage from "../react/ReactPage";
import NodeJsPage from "../nodejs/NodeJsPage";
import MongoDBPage from "../mongodb/MongoDBPage";
import GoHome from "../../components/goHome/GoHome";
import ScrollToTopAndBottom from "../../components/ScrollToTopAndBottom/ScrollToTopAndBottom";
import Footer from "../../components/footer/Footer";
import dividerTop from '../../assets/images/divider-round-top.svg';


const Main = () => {

    return (
        <div className="main">
            <ScrollToTopAndBottom />
            <SidebarToggler />
                <BrowserRouter>
                    <BubblyContainer />
                    <Routes>
                    
                        <Route
                        path="/"
                        element={
                            <>
                            <GoHome />
                            <Sidebar />
                            <Outlet />
                            </>
                        }
                        >
                        <Route index element={<Home />} />
                        <Route path="html_css" element={<HtmlCssPage />} />
                        <Route path="javascript" element={<JavaScriptPage />} />
                        <Route path="react" element={<ReactPage />} />
                        <Route path="nodejs" element={<NodeJsPage />} />
                        <Route path="mongodb" element={<MongoDBPage />} />
                        <Route path="*" element={<>No Match</>} />
                        </Route>
                    </Routes>
                    <img className='divider_rounded_top' src={ dividerTop } alt="divider-rounded-top" />
                    <Footer />
                </BrowserRouter>
        </div>
    )
};

export default Main;