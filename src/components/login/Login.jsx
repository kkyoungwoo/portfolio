import React from 'react'
import './login.css'

function Login(props) {
    return (
        <div className="Login_wrap">
            <div className="Login_wrap_inner">
                <div className="login_logo_img">
                    <img src={props.colorBtn ? "./assets/common/logo/logo_white.png" : "./assets/common/logo/logo_black.png"} alt="logo" />
                </div>
                <div className="login_logo_img">
                    로그인
                </div>
                <div className="Login_input">
                    <input type="text" name="ids" id="ids" />
                    <input type="password" name="passwords" id="passwords" />
                </div>
                <div className="Login_simple">
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