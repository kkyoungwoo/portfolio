import React, {useState,useEffect,useRef} from 'react';

import Footer from './common/Footer';
import Cerousel from './cerousel/Cerousel';
import About from './about/About';
import Mail from './mail/Mail';
import Portfolio from './portfolio/Portfolio';
import Message from './message/Message';
import Gallery from './gallery/Gallery';
import NotFound from './common/NotFound';
import Login from './login/Login';
import './app.css'

import { Route,Switch,Link } from 'react-router-dom'
import { useCallback } from 'react';


function App({history}) {

    function useInterval(callback, delay) {
      const savedCallback = useRef(null);
      
      // remember latest callback
      useEffect(() => {
        savedCallback.current = callback;
      }, [callback]);

      // setup the interval
      useEffect(() => {
        function tick() {
          savedCallback.current();
        }

        if (delay !== null) {
          let id = setInterval(tick, delay);
          return () => clearInterval(id);
        }
      }, [delay]);
    }
    
    let [count, setCount] = useState(new Date().toLocaleString());
    let countTwo = "2021. 8. 24.";

    useInterval(() => {
        setCount(new Date().toLocaleString());
    }, 1000);
    

    const useref = useRef(null)
    const bannerHeightRef = useRef(null)

    const getSiteTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const [colorBtn,setColorBtn] = useState(true)
    const [navBtn,setNavBtn] = useState("")
    const useCallbackBtn = useCallback(()=>{
        if(navBtn === ""){
            setNavBtn("checked")
        }else if (navBtn === "checked"){
            setNavBtn("")
        }
    },[navBtn])

    return (
        <div className="app" style={{
            background: colorBtn ? "#292a2d" : "white",
            color: colorBtn ? "white" : "black"
            }}>
                <header style={{background: colorBtn ? "#292a2d" : "white"}}>
                    <Link to="/">
                        <div className="logo">
                            <img src={colorBtn ? "./assets/common/logo/logo_white.png" : "./assets/common/logo/logo_black.png"} alt="logo" />
                        </div>
                    </Link>
                    <nav>
                    <input type="checkbox" id="mobile_nav" onClick={useCallbackBtn} checked={navBtn}/>
                        <label htmlFor="mobile_nav" className="mobile_btn">
                            <span style={{background : colorBtn ? "white" : "black"}}></span>
                            <span style={{background : colorBtn ? "white" : "black"}}></span>
                            <span style={{background : colorBtn ? "white" : "black"}}></span>
                        </label>
                        <div className="navi_menu" style={{
                            opacity : colorBtn ? ".9" : ".9"
                            }}
                            >
                            <li>
                                <label className="mobileclose" htmlFor="mobile_nav" >
                                    <span style={{background : colorBtn ? "white" : "black"}}></span>
                                    <span style={{background : colorBtn ? "white" : "black"}}></span>
                                </label>
                            </li>
                                <li>
                                    <Link to="/" className="linkbtn" onClick={useCallbackBtn} style={{color : colorBtn ? "white" : "black",}}>
                                        메인페이지
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/portfolio" className="linkbtn" onClick={useCallbackBtn} style={{color : colorBtn ? "white" : "black",}}>
                                        포트폴리오
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/message" className="linkbtn" onClick={useCallbackBtn} style={{color : colorBtn ? "white" : "black",}}>
                                        응원메세지
                                    </Link>    
                                </li>
                                <li>
                                    <Link to="/gallery" className="linkbtn" onClick={useCallbackBtn} style={{color : colorBtn ? "white" : "black",}}>
                                        사진첩
                                    </Link>
                                </li>
                        </div>
                        <div className="gnb" >
                            <ul>
                                <li onClick={()=>setColorBtn(!colorBtn)} >
                                    <img src={colorBtn ? "./assets/common/icon/white.png" : "./assets/common/icon/black.png"} alt="white" />
                                </li>
                                <li>
                                    <Link to="/login">
                                        <img src={colorBtn ? "./assets/common/icon/login_white.png" : "./assets/common/icon/login_black.png"} alt="login" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact>
                        <div className="wrapper">
                            <About
                            colorBtn={colorBtn}
                            bannerHeightRef={bannerHeightRef}
                            useref={useref}
                            count={count}
                            countTwo={countTwo}
                            />
                            <Cerousel/>
                            <Portfolio colorBtn={colorBtn} />
                            <div className="footer_img_wrap">
                                <div>
                                    <Link to="/message">
                                        <div className="link_text">
                                            깊은 강은 돌을 던졌다고 흐려지지 않는다.
                                        </div>
                                        <img src="./assets/message.png" alt="message" />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/mail">
                                        <div className="link_text black">
                                            동행을 원하는 분은 메일을 남겨주세요.
                                        </div>
                                        <img src="./assets/mail.png" alt="mail" />
                                    </Link>
                                </div>
                            </div>
                            <div className="gallery_btn_box">
                                <Link to="/gallery" className="gallery_btn_wrap">
                                    <button className="gallery_btn">
                                        사진첩 보기
                                    </button>
                                </Link>
                                <a href="https://github.com/kkyoungwoo" className="gallery_btn_wrap" target="_blank" rel="noopener noreferrer">
                                    <button className="gallery_btn">
                                        Github 바로가기
                                    </button>
                                </a>
                            </div>
                        </div>
                    </Route>
                    <Route path="/portfolio" exact>
                        <div className="wrapper">
                            <Portfolio colorBtn={colorBtn} count={count}/>
                        </div>
                    </Route>
                    <Route path="/message" exact>
                        <div className="wrapper">
                                <Message colorBtn={colorBtn}/>
                        </div>
                    </Route>
                    <Route path="/gallery" exact>
                        <div className="wrapper">
                                <Gallery/>
                        </div>
                    </Route>
                    <Route path="/login" exact>
                        <div className="wrapper">
                                <Login colorBtn={colorBtn}/>
                        </div>
                    </Route>
                    <Route path="/mail" exact>
                        <div className="wrapper">
                                <Mail colorBtn={colorBtn}/>
                        </div>
                    </Route>
                    <Route path="*" component={NotFound} exact />
                </Switch>
                <Footer colorBtn={colorBtn} getSiteTop={getSiteTop}/>
        </div>
    )
}

export default App