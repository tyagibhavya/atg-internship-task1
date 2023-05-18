import React from "react";
import './RegisterForm.css';

const RegisterForm = ({ isShowRegister, handleLoginClick, handleCloseClick, handleSubmitLogin }) => {
    const handleClose = () => {
        handleCloseClick();
    };
    const handleClick = () => {
        handleLoginClick();
    };
    const handleSubmit = () => {
        handleSubmitLogin();
    };
    return (
        <div className={`${!isShowRegister ? "active" : ""} show`}>
            <div className="bg"></div>
            <div className="close-button">
                <button onClick={handleClose}><img src={require('../../../data/close.png')} alt="" /></button>
            </div>
            <div className="register-container">
                <div className="register-top-bar">
                    <p>
                        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                    </p>
                </div>
                <div className="register-headings">
                    <h1>Sign In</h1>
                    <h2>Welcome Back!</h2>
                    <div className="register-headings-close-button">
                        <button onClick={handleClose}><img src={require('../../../data/Mobile/close.png')} alt="" /></button>
                    </div>
                    <p>Don’t have an account yet?</p>
                    <button type="button" onClick={handleClick}>Create new for free!</button>
                </div>
                <div className="register-box">
                    <div className="register-form">
                        <form>
                            <div className="register-row">
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="register-row">
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className="register-row">
                                <button type="submit" onClick={handleSubmit}>Sign In</button>
                                <button type="reset" onClick={handleClick}>or, Create Account</button>
                            </div>
                            <div className="register-row">
                                <button type="button">
                                    <img src={require('../../../data/fb.png')} alt="" />
                                    Sign In with Facebook
                                </button>
                            </div>
                            <div className="register-row">
                                <button type="button">
                                    <img src={require('../../../data/google.png')} alt="" />
                                    Sign In with Google
                                </button>
                            </div>
                            <div className="register-row">
                                <p>Forgot Password</p>
                            </div>
                        </form>
                    </div>
                    <img type="poster" src={require('../../../data/loginimg.png')} alt="login-img" />
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
