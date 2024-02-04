import { useSelector } from "react-redux";
import { getIsOpen } from "../../Redux/SidebarSlice";




const Sidebar = () => {

    const isOpen = useSelector(getIsOpen);

    // d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar

    return (
        <div className={ `d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar ${ isOpen ? "open" : "" }` }>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            
            <span className="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item my-3">
                    <a href="#abc" className="nav-link active" aria-current="page">
                    
                    Home
                    </a>
                </li>
                <li className="nav-item my-3">
                    <a href="#abc" className="nav-link text-white">
                    
                    Dashboard
                    </a>
                </li>
                <li className="nav-item my-3">
                    <a href="#abc" className="nav-link text-white">
                    
                    Orders
                    </a>
                </li>
                <li className="nav-item my-3">
                    <a href="#abc" className="nav-link text-white">
                    
                    Products
                    </a>
                </li>
                <li className="nav-item my-3">
                    <a href="#abc" className="nav-link text-white">
                    
                    Customers
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropup">
                <a href="#abc" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="user" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#abc">New project...</a></li>
                    <li><a className="dropdown-item" href="#abc">Settings</a></li>
                    <li><a className="dropdown-item" href="#abc">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#abc">Sign out</a></li>
                </ul>
            </div>
        </div>
    )
};

export default Sidebar;