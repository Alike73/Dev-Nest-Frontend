import LoginBtn from '../../components/login/LoginBtn';
import LoginTitle from '../../components/login/LoginTitle';
import LoginImage from '../../components/login/LoginImage';
import LoginText from '../../components/login/LoginText';
import LoginBgVideo from '../../components/login/LoginBgVideo';

const LoginPage = () => {

    return (
        <div className="login">
            <div className="overlay"></div>
            <LoginBgVideo />
            <div className="hero_login">
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
                        <LoginTitle />
                        <LoginImage />
                        <div className="col-lg-6">
                            <LoginText />
                            <LoginBtn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;