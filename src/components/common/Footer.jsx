import React from 'react'
import './footer.css'

function Footer(props) {
    return (
        <div className="footer">
            <div className="scroll_top">
                <div style={{
                    background: props.colorBtn ? "white" : "#292a2d"
                }}>
                    <img className="scroll_icon" src={props.colorBtn ? "./assets/common/icon/pageup_black.png" : "./assets/common/icon/pageup_white.png"} alt="pageup" />
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