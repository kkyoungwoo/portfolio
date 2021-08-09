import React from 'react'
import './cerousel.css'

const cerouselData = [
    {
        text: "산림박람회",
        imgLink: "",
    },
    {
        text: "아이코코",
        imgLink: "",
    },{
        text: "없음",
        imgLink: "",
    },{
        text: "없음",
        imgLink: "",
    },
]

function Cerousel() {
    return (
        <div className="cerousel_wrap">
            <h1>작업 업체 리스트</h1>
           <div className="cerousel_cards">
               {cerouselData.map((item,idx)=>{
                   return(
                    <div key={idx} className="cerousel_card">
                        <div className="card">
                            <div>{item.text}</div>
                            <div>
                                <img src="" alt="img" />
                            </div>
                        </div>
                    </div>
                   )
               })}
           </div>
        </div>
    )
}

export default Cerousel
