import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './message.css'


function Message(props) {
    const MAX_DATA = 3;
    
    const [inputText,setInputText] = useState("")
    const [messageData, setMessageData] = useState(["반갑습니다. 메모장입니다."])
    const [moreData,setMoreData] = useState(MAX_DATA)

    return (
        <div className="message_wrap">
            <div className="message_title">간단한 메세지를 남겨주세요</div>
            <div className="message_sub_title">현재 데이터가 저장되지 않습니다.</div>
            <div className="message_box" style={{
                border : props.colorBtn ? "1px solid white" : "1px solid black",
            }}>
                <input type="text" onChange={(e)=>setInputText(e.target.value)}/>
                <button onClick={ ()=>{
                    const ArrayData = [...messageData];
                    ArrayData.unshift(inputText);
                    setMessageData(ArrayData);
                }}>등록</button>
            </div>
            <div className="message_inner" style={{
                height: messageData.length < MAX_DATA ? messageData.length * 100 + "px" : moreData * 100 + "px",
                maxHeight: messageData.length * 100 + "px",
                overflow: "hidden",
            }}>
                {messageData.map((item,idx) => {
                    return(
                        <div className="item" key={idx} style={{
                            border : props.colorBtn ? "1px solid white" : "1px solid black",
                        }}>
                            {item}
                        </div>
                    )
                })}
            </div>
            <div onClick={()=>messageData.length > MAX_DATA &&  messageData.length > moreData ? setMoreData(moreData + 5) : setMoreData(moreData)}>
                {messageData.length <= moreData ? "" : "메세지 더보기"}
            </div>
            <div className="join_mail" style={{
                    background : props.colorBtn ? "black" : "aliceblue",
                }}>
                <Link to="/mail" style={{
                    color : props.colorBtn ? "white" : "black",
                }}>
                    E-mail 보내기
                </Link>
            </div>
        </div>
    )
}

export default Message
