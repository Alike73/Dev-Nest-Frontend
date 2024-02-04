import HeroButton from "./HeroButton";
import HeroContentImage from "./HeroContentImage";
import HeroContentText from "./HeroContentText";
import HeroContentTitle from "./HeroContentTitle";


const Hero = () => {

    return (
        <div className="row flex-lg-row-reverse justify-content-center align-items-end g-5 py-5">
            <HeroContentTitle />
            <HeroContentImage />
            <div className="col-lg-6">
                <HeroContentText />
                <HeroButton />
            </div>
        </div>
    )
};

export default Hero;