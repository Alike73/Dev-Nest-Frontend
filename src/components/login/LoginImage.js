import login_illustration from '../../assets/images/login-illustration.svg';

const LoginImage = () => {

    return (
        <div className="col-10 col-sm-8 col-lg-6 mt-2">
            <img src={ login_illustration } className="d-block mx-lg-auto img-fluid login_hero_img" alt="Graduation" width="700" loading="lazy" />
        </div>
    )
};

export default LoginImage;