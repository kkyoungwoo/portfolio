import React, { useEffect, useState, useRef } from 'react'
import './portfolio.css'

function Portfolio(props) {

    const aboutProjectData = [
        {
            project: "EXCO",
            projectDate: "2019-01-01",
            projectSummary: "컴포넌트 구축",
            projectData: "1",
            projectLink: "https://naver.com/",
            contribute: 100,
            contributeText: "hundred",
            imgUrl: "img",
        },
        {
            project: "디어케어 반응형 구축",
            projectDate: "2019-01-01",
            projectSummary: "컴포넌트 구축",
            projectData: "ㅇㅇㅇ을 이용하여 작업하였습니다.2",
            projectLink: "https://naver.com",
            contribute: 90,
            contributeText: "ninety",
            imgUrl: "img",
        },
        {
            project: "디어케어 반응형 구축",
            projectDate: "2019-01-01",
            projectSummary: "컴포넌트 구축",
            projectData: "ㅇㅇㅇ을 이용하여 작업하였습니다.2",
            projectLink: "https://naver.com",
            contribute: 90,
            contributeText: "ninety",
            imgUrl: "img",
        },
    ]
    
    const [projectNum,setProjectNum] = useState(0)
    const [position,setPosition] = useState(0)

    const latelyRef = useRef(null)
    const [latelyRefPosition,setLatelyRefPosition] = useState(0)
    const [latelyRefHeight,setLatelyRefHeight] = useState(0)

    const detailRef = useRef(null)
    const [detailRefHeight,setDetailRefHeight] = useState(0)

    function onScroll(){
        setPosition(window.scrollY)
    }

    useEffect(()=>{
        window.addEventListener('scroll', onScroll)
        return()=>{
            window.addEventListener('scroll', onScroll)
        }
    },[])

    useEffect(() =>{
        setLatelyRefPosition(latelyRef.current.offsetTop)
        setLatelyRefHeight(latelyRef.current.offsetHeight)
        setDetailRefHeight(detailRef.current.offsetHeight)
        console.log(latelyRefPosition)
    }, [onScroll])

    return (
        <div className="portfoilo_inner">
            <div className="aboutcards">
                <h3>최근작업</h3>
                <div className="aboutcard" ref={latelyRef}>
                    <div className="lately">
                        {aboutProjectData.map((item,idx)=>{
                            return(
                                <div key={idx} className="subdata">
                                    <div className="subdata_inner" style={{
                                    border : props.colorBtn ? "1px solid white" : "1px solid black", 
                                    }}>
                                        <div>
                                            <div>{item.project}</div>
                                            <div>{item.projectDate}</div>
                                            <div>{item.projectSummary}</div>
                                        </div>
                                        <div className="button_warp">
                                            <button
                                            onClick={()=>setProjectNum(idx)}>
                                                클릭
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="subdata_detail" style={{
                        border : props.colorBtn ? "1px solid white" : "1px solid black", 
                        position: position > latelyRefPosition - 100 && position < latelyRefPosition + latelyRefHeight - detailRefHeight - 100 ? "fixed" : "absolute",
                        top: position > latelyRefPosition - 100 && position < latelyRefPosition + latelyRefHeight - detailRefHeight - 100 ? "100px" : "0",
                        right: position > latelyRefPosition - 100 && position < latelyRefPosition + latelyRefHeight - detailRefHeight - 100 ? "30px" : "0px",
                        width: position > latelyRefPosition - 100 && position < latelyRefPosition + latelyRefHeight - detailRefHeight - 100 ? "calc(50% - 30px)" : "calc(50%)",
                        boxShadow: props.colorBtn ? "5px 5px 20px rgba(255,255,255,.1)" : "5px 5px 20px rgba(0,0,0,.3)",
                        }}
                        ref={detailRef}
                        >
                            <div className="projectdata_text">
                                <div>{aboutProjectData[projectNum].projectData}</div>
                                <div>{aboutProjectData[projectNum].imgUrl}</div>
                                <div>
                                    <button>
                                        <a href={aboutProjectData[projectNum].projectLink} target="_blank" rel="noopener noreferrer">
                                        링크클릭
                                        </a>
                                    </button>
                                </div>
                            </div>
                            <div className="circle_wrap">
                                <div className="circle_inner"
                                style={{
                                    background : props.colorBtn ? "rgb(41, 42, 45)" : "white", 
                                }}
                                ></div>
                                <div className={"circle " + aboutProjectData[projectNum].contributeText}>
                                    <div className="bar left"
                                    style={{
                                            background : props.colorBtn ? "rgba(233, 233, 233,.3)" : "rgba(41, 42, 45,.3)", 
                                        }}>
                                        <div className="progress"
                                        style={{
                                            background : props.colorBtn ? "white" : "rgb(41, 42, 45)", 
                                        }}></div>
                                    </div>
                                    <div className="bar right"
                                    style={{
                                            background : props.colorBtn ? "rgba(233, 233, 233,.3)" : "rgba(41, 42, 45,.3)", 
                                        }}>
                                        <div className="progress"
                                        style={{
                                            background : props.colorBtn ? "white" : "rgb(41, 42, 45)", 
                                        }}></div>
                                    </div>
                                </div>
                                <div className="progress_text">
                                    <div className="progress_subtext">
                                        기여도        
                                    </div>
                                    <div>
                                        {aboutProjectData[projectNum].contribute}%
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Portfolio
