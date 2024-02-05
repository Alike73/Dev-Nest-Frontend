import login_illustration from '../../assets/images/login-illustration.svg';
import LoginBtn from '../../components/LoginBtn/LoginBtn';

const LoginPage = () => {

    return (
        <div className="login page">
            <div className="hero_login">
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
                        <h2 className="fw-bold mb-2 mt-0">
                            Welcome to Dev Nest!
                        </h2>
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={ login_illustration } className="d-block mx-lg-auto img-fluid login_hero_img" alt="Graduation" width="700" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <p className="lead">
                                Discover a wealth of reading options! 
                                <span className="text-info ms-2">LogIn</span> or <span className="text-info me-2">SignUp</span> 
                                to access our entire collection of library books.
                            </p>
                            <LoginBtn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;