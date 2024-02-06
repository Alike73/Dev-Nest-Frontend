import Hero from "../../components/homeHero/Hero";
import dividerImg from "../../assets/images/divider-round-bottom.svg";
import PDFLibrary from "../../components/pdfLibrary/PDFLibrary";


const Home = () => {

    return (
        <div className="home page">
            <div className="hero">
                <div className="container col-xxl-8 px-4 pt-5">
                    <Hero />
                </div>
                <img className="divider_bottom" src={ dividerImg } alt="divider-round-bottom" />
            </div>
                <PDFLibrary />
        </div>
    )
};

export default Home;