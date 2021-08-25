import React, { useEffect,useState } from 'react'
import './gallery.css'

function Gallery(props) {

    const imgData = [
        {
            name: "모닝콜 사업",
            src: "./assets/gallery/adak.jpg",
        },
        {
            name: "군입대",
            src: "./assets/gallery/army.jpg",
        },
        {
            name: "마케팅 강의",
            src: "./assets/gallery/teach.jpg",
        },
        {
            name: "자전거 여행",
            src: "./assets/gallery/bike.jpg",
        },
        {
            name: "디자인 공부",
            src: "./assets/gallery/design.jpg",
        },
        {
            name: "재미있게 놀기",
            src: "./assets/gallery/enjoy.jpg",
        },
        {
            name: "게임기 구매",
            src: "./assets/gallery/game.jpg",
        },
        {
            name: "보험 영업",
            src: "./assets/gallery/insur.jpg",
        },
        {
            name: "서울 나들이",
            src: "./assets/gallery/seoul.jpg",
        },
        {
            name: "TV 출연",
            src: "./assets/gallery/tv.jpg",
        },
    ]

    const [imgTop,setImgTop] = useState(0)

    useEffect(()=>{
        setImgTop(Math.floor(Math.random()*10))
    },[])
    
    return (
        <div className="img_warp">
            {imgData.map((item,idx)=>{
                return(
                    <div key={idx} className="item" style={{
                        transform: "translateY("+ imgTop*-(Math.floor(Math.random()*10)) +"px)",
                        padding: "0 "+imgTop*5+"px"
                    }}>
                        <img src={item.src} alt={item.name}/>
                        <div className="item_text" style={{
                            color : props.colorBtn? "white" : "white",
                        }}>{item.name}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery
