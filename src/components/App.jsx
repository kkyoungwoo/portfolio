import React, {useState,useEffect,useRef} from 'react';
import Footer from './common/Footer';
import Cerousel from './cerousel/Cerousel';
import About from './about/About';
import Mail from './mail/Mail';
import Portfolio from './portfolio/Portfolio';
import Message from './message/Message';
import Gallery from './gallery/Gallery';
import NotFound from './common/NotFound';

import './app.css'

import { Route,Switch,Link } from 'react-router-dom'

function App() {

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
                        <input type="checkbox" id="mobile_nav" />
                        <label htmlFor="mobile_nav" className="mobile_btn">
                            <span style={{background : colorBtn ? "white" : "black"}}></span>
                            <span style={{background : colorBtn ? "white" : "black"}}></span>
                            <span style={{background : colorBtn ? "white" : "black"}}></span>
                        </label>
                        <ul className="navi_menu" style={{
                            background : colorBtn ? "#292a2d" : "white",
                            opacity : colorBtn ? ".9" : ".9"
                            }}>
                            <li>
                                <label htmlFor="mobile_nav">
                                    <span style={{background : colorBtn ? "white" : "black"}}></span>
                                    <span style={{background : colorBtn ? "white" : "black"}}></span>
                                </label>
                            </li>
                            <Link to="/">
                                <li style={{color : colorBtn ? "white" : "black",}}>메인페이지</li>
                            </Link>
                            <Link to="/portfolio">
                                <li style={{color : colorBtn ? "white" : "black",}}>포트폴리오</li>
                            </Link>
                            <Link to="/message">
                                <li style={{color : colorBtn ? "white" : "black",}}>응원메세지</li>
                            </Link>
                            <Link to="/gallery">
                                <li style={{color : colorBtn ? "white" : "black",}}>사진첩</li>
                            </Link>
                        </ul>
                        <div className="gnb" >
                            <ul>
                                <li onClick={()=>setColorBtn(!colorBtn)} >
                                    <img src={colorBtn ? "./assets/common/icon/white.png" : "./assets/common/icon/black.png"} alt="white" />
                                </li>
                                <li>
                                    <img src={colorBtn ? "./assets/common/icon/login_white.png" : "./assets/common/icon/login_black.png"} alt="login" />
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
                            />
                            <Cerousel/>
                            <Portfolio colorBtn={colorBtn} />
                            <Message />
                            <Mail />
                        </div>
                    </Route>
                    <Route path="/portfolio" exact>
                        <div className="wrapper">
                            <Portfolio colorBtn={colorBtn} count={count}/>
                        </div>
                    </Route>
                    <Route path="/message" exact>
                        <div className="wrapper">
                                <Message/>
                        </div>
                    </Route>
                    <Route path="/gallery" exact>
                        <div className="wrapper">
                                <Gallery/>
                        </div>
                    </Route>
                    <Route path="*" component={NotFound} exact />
                </Switch>
                <Footer colorBtn={colorBtn} getSiteTop={getSiteTop}/>
        </div>
    )
}

export default App