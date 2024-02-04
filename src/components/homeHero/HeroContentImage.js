import hero_illustration from '../../assets/images/books-illustration.svg';
import ringsPattern from '../../assets/images/rings.svg';

const HeroContentImage = () => {

    return (
        <div className="col-10 col-sm-8 col-lg-6 mt-0 hero_img_wrapper">
            <img className="rings_pattern img-fluid" src={ ringsPattern } alt="rings_pattern" />
            <img 
                src={ hero_illustration } 
                className="d-block mx-lg-auto img-fluid home_hero_img" 
                alt="Bootstrap Themes" 
                width="700" 
                loading="lazy" 
            />
        </div>
    )
};

export default HeroContentImage;