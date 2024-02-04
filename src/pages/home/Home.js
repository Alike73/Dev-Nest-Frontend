import Hero from "../../components/homeHero/Hero";
import dividerImg from "../../assets/images/divider-round-bottom.svg";


const Home = () => {

    return (
        <div className="home">
            <div className="hero">
                <div className="container col-xxl-8 px-4 pt-5">
                    <Hero />
                </div>
                <img className="divider_bottom" src={ dividerImg } alt="divider-round-bottom" />
            </div>
        </div>
    )
};

export default Home;