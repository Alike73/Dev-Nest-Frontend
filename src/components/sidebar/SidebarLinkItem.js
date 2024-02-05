import { useSelector } from "react-redux";
import { getIsOpen } from "../../Redux/SidebarSlice";
import { BubblyLink } from "react-bubbly-transitions";


const SidebarLinkItem = ({ routeTo, icon, title }) => {

    const isOpen = useSelector(getIsOpen);

    return (
        <li className={ `nav-item my-3 ${ isOpen ? "open" : "" }` }>
            <BubblyLink to={ routeTo }>
                <div className="list-item">
                    <div className="rank">
                        <span>
                            { icon }
                        </span>
                    </div>
                    <div className="name ms-3">
                        <h4>{ title }</h4>
                    </div>
                </div>
            </BubblyLink>
        </li>
    )
};

export default SidebarLinkItem;