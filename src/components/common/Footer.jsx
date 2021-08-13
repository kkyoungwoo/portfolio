import React from 'react'
import './footer.css'

function Footer(props) {
    return (
        <div className="footer">
            <div className="scroll_top">
                <div onClick={props.getSiteTop}>
                    <img className="scroll_icon" src={props.colorBtn ? "./assets/common/icon/pageup_black.png" : "./assets/common/icon/pageup_white.png"} alt="pageup"
                    style={{
                        opacity: window.scrollY === 0 ? "0" : "1",
                        background: props.colorBtn ? "white" : "#292a2d",
                        transition: window.scrollY === 0 ? ".2s" : ".3s",
                    }}/>
                </div>
            </div>
            <footer style={{
                background: props.colorBtn ? "#292a2d" : "white",
                color: props.colorBtn ? "white" : "black"
                }}>
                ⓒ 2021 UI/UX DEV. Ko Kyoung Woo
            </footer>
        </div>
    )
}

export default Footer