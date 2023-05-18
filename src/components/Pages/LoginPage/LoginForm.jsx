import React from "react";
import './LoginForm.css';

const LoginForm = ({ isShowLogin, handleRegisterClick, handleCloseClick }) => {
    const handleClose = () => {
        handleCloseClick();
    }
    const handleClick = () => {
        handleRegisterClick();
    }
    return (
        <div className={`${!isShowLogin ? "active" : ""} show`}>
            <div className="bg"></div>
            <div className="close-button">
                <button onClick={handleClose}><img src={require('../../../data/close.png')} alt="" /></button>
            </div>
            <div className="container">
                <div className="top-bar">
                    <p>
                        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                    </p>
                </div>
                <div className="headings">
                    <h1>Create Account</h1>
                    <div className="headings-close-button">
                        <button onClick={handleClose}><img src={require('../../../data/Mobile/close.png')} alt="" /></button>
                    </div>
                    <p>Already have an account?</p>
                    <button type="button" onClick={handleClick}>Sign In</button>
                </div>
                <div className="box">
                    <div className="login-form">
                        <form>
                            <div className="row">
                                <div className="half">
                                    <input type="text" placeholder="First Name" />
                                </div>
                                <div className="half">
                                    <input type="text" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="row">
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="row">
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className="row">
                                <input type="password" placeholder="Confirm Password" />
                            </div>
                            <div className="row">
                                <button type="submit">Create Account</button>
                                <button type="reset" onClick={handleClick}>Sign In</button>
                            </div>
                            <div className="row">
                                <button type="button">
                                    <img src={require('../../../data/fb.png')} alt="" />
                                    Sign Up with Facebook
                                </button>
                            </div>
                            <div className="row">
                                <button type="button">
                                    <img src={require('../../../data/google.png')} alt="" />
                                    Sign Up with Google
                                </button>
                            </div>
                            <div className="row">
                                <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                            </div>
                        </form>
                    </div>
                    <img type="poster" src={require('../../../data/loginimg.png')} alt="login-img" />
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
