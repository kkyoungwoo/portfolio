import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

function Login(props) {
    return (
        <div className="login_wrap">
            <div className="login_wrap_inner">
                <div className="login_logo_img">
                    <Link to="/">
                        <img src={props.colorBtn ? "./assets/common/logo/logo_white.png" : "./assets/common/logo/logo_black.png"} alt="logo" />
                    </Link>
                </div>
                <div className="login_input">
                    <input type="text" name="ids" id="ids" />
                    <input type="password" name="passwords" id="passwords" />
                </div>
                <div className="login_btn">
                    <button>로그인</button>
                </div>
                <div className="line"
                style={{
                    background : props.colorBtn ? "white" : "black",
                }}></div>
                <div className="login_simple">
                    <div className="simple_text">더욱 간편한 로그인</div>
                    <button>
                        <div>
                            <img src="./assets/login/kakao.png" alt="kakao" />
                        </div>
                        <div>카카오 로그인</div>
                    </button>
                    <button>
                        <div>
                            <img src="./assets/login/google.png" alt="google" />
                        </div>
                        <div>구글 로그인</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login