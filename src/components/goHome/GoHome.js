import { FaHome } from "react-icons/fa";
import { BubblyLink } from "react-bubbly-transitions";

const GoHome = () => {

    return (
        <div className="go_home">
            <BubblyLink to="/">
                <FaHome className="fs-5 home_icon" />
            </BubblyLink>
        </div>
    )
};

export default GoHome;