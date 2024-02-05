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


const Main = () => {

    return (
        <div className="main">
            <SidebarToggler />
                <BrowserRouter>
                    <BubblyContainer />
                    <Routes>
                    
                        <Route
                        path="/"
                        element={
                            <>
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
                </BrowserRouter>
        </div>
    )
};

export default Main;