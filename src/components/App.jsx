import React, {useState,useEffect,useRef} from 'react';
import { connect } from 'react-redux'

import Header from './common/Header';
import Footer from './common/Footer';
import Cerousel from './cerousel/Cerousel';
import About from './about/About';
import Mail from './mail/Mail';
import Portfolio from './portfolio/Portfolio';
import Message from './message/Message';
import './app.css'


function App() {

    const useref = useRef(null)

    const getSiteTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const getCerouselTop = () =>{
        window.scrollTo({
            top: useref.current.offsetTop,
            behavior: "smooth"
        })
    }

    const [colorBtn,setColorBtn] = useState(true)
    const [position,setPosition] = useState(0)

    const [bannerPosition,setBannerPosition] = useState(0)
    
    function onScroll(){
        setPosition(window.scrollY)
    }

    useEffect(()=>{
        window.addEventListener('scroll', onScroll)
        console.log("position:"+position)
        console.log("bannerPosition :" + bannerPosition)
        setBannerPosition(useref.current.offsetTop)
        return()=>{
            window.addEventListener('scroll', onScroll)
        }
    },[position])

    const bannerRef = useRef(null)
    const bannerHeightRef = useRef(null)

    const [bannerBottomPosition,setBannerBottomPosition] = useState(0)
    const [bannerHeight,setBannerHeight] = useState(0)

        useEffect(()=>{
            setBannerBottomPosition(bannerRef.current.offsetHeight)
            setBannerHeight(bannerHeightRef.current.offsetHeight)
            console.log("bannerBottomPosition:"+bannerBottomPosition)
            console.log("bannerHeight:"+bannerHeight)
        },[position])

    return (
        <div className="app" style={{
            background: colorBtn ? "#292a2d" : "white",
            color: colorBtn ? "white" : "black"
            }}>
            <header style={{background: colorBtn ? "#292a2d" : "white"}}>
                <div className="logo" onClick={getCerouselTop}>
                    <img src={colorBtn ? "./assets/common/logo/logo_white.png" : "./assets/common/logo/logo_black.png"} alt="logo" />
                </div>
                <nav>
                    <input type="checkbox" id="mobile_nav" />
                    <label htmlFor="mobile_nav" className="mobile_btn">
                        <span style={{background : colorBtn ? "white" : "black"}}></span>
                        <span style={{background : colorBtn ? "white" : "black"}}></span>
                        <span style={{background : colorBtn ? "white" : "black"}}></span>
                    </label>
                    <ul className="navi_menu" style={{
                        color : colorBtn ? "white" : "black",
                        background : colorBtn ? "#292a2d" : "white",
                        opacity : colorBtn ? ".9" : ".9"
                        }}>
                        <li>
                            <label htmlFor="mobile_nav">
                                <span style={{background : colorBtn ? "white" : "black"}}></span>
                                <span style={{background : colorBtn ? "white" : "black"}}></span>
                            </label>
                        </li>
                        <li>메인페이지</li>
                        <li>포트폴리오</li>
                        <li>응원메세지</li>
                        <li>사진첩</li>
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
            <div className="wrapper">
                <About
                colorBtn={colorBtn}
                position={position}
                bannerPosition={bannerPosition}
                bannerRef={bannerRef}
                bannerHeightRef={bannerHeightRef}
                bannerBottomPosition={bannerBottomPosition}
                bannerHeight={bannerHeight}
                />
                <span ref={useref}></span>
                <Cerousel />
                <Portfolio />
                <Message />
                <Mail />
            </div>
            <Footer colorBtn={colorBtn} getSiteTop={getSiteTop}/>
        </div>
    )
}

export default App
