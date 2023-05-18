import { useState } from "react";
import { Header } from "./components/Header/Header";
import LoginForm from "./components/Pages/LoginPage/LoginForm";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Pages/HomePage/Home";
import RegisterForm from "./components/Pages/RegisterPage/RegisterForm";

function App() {
    const [isShowLogin, setIsShowLogin] = useState(false);
    const [isShowRegister, setIsShowRegister] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const handleLoginClick = () => {
        if (isShowRegister) {
            setIsShowRegister(false);
        }
        setIsShowLogin((isShowLogin) => !isShowLogin);
    };

    const handleRegisterClick = () => {
        if (isShowLogin) {
            setIsShowLogin(false);
        }
        setIsShowRegister((isShowRegister) => !isShowRegister);
    };

    const handleCloseClick = () => {
        setIsShowRegister(false);
        setIsShowLogin(false);
    };

    const handleSubmitLogin = () => {
        setIsLogin((isLogin) => !isLogin);
        console.log(isLogin);
    }

    return (
        <div className="App">
            <Navbar
                handleLoginClick={handleLoginClick}
                isLogin={isLogin}
            />
            <LoginForm
                isShowLogin={isShowLogin}
                handleRegisterClick={handleRegisterClick}
                handleCloseClick={handleCloseClick}
            />
            <RegisterForm
                isShowRegister={isShowRegister}
                handleLoginClick={handleLoginClick}
                handleCloseClick={handleCloseClick}
                handleSubmitClick={handleSubmitLogin}
            />
            <Header />
            <Home />
        </div>
    );
};

export default App;
