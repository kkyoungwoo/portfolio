import React, { useEffect, useState, useRef } from 'react'
import './portfolio.css'

function Portfolio(props) {

    const aboutProjectData = [
        {
            project: "EXCO 산림박람회",
            projectDate: "2021-07-10",
            projectSummary: "설문지폼 3개 제작",
            projectData: "React, firebase 사용",
            projectSubData: "개인 프로젝트",
            projectLink: "https://gbforestexpo.co.kr/",
            contribute: 100,
            contributeText: "hundred",
            imgUrl: "./assets/portfoilo/testc.jpg",
        },
        {
            project: "디어케어",
            projectDate: "2021-06-01",
            projectSummary: "컴포넌트 구축",
            projectData: "React, firebase 사용",
            projectSubData: "반응형웹 팀 프로젝트",
            projectLink: "https://dear.care",
            contribute: 70,
            contributeText: "seventy",
            imgUrl: "./assets/portfoilo/testb.jpg",
        },
        {
            project: "테스트 데이터",
            projectDate: "2021-00-00",
            projectSummary: "테스트",
            projectData: "React, firebase 사용",
            projectSubData: "테스트 데이터",
            projectLink: "https://naver.com",
            contribute: 90,
            contributeText: "ninety",
            imgUrl: "./assets/portfoilo/testb.jpg",
        },
    ]
    
    const [projectNum,setProjectNum] = useState(aboutProjectData.length -1)
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
    }, [onScroll])

    return (
        <div className="portfoilo_inner">
            <div className="aboutcards">
                <h3>최근작업</h3>
                <div className="aboutcard" ref={latelyRef}>
                    <div className="lately">
                        {aboutProjectData.map((item,idx)=>{
                            return(
                                <div key={idx} className="subdata" >
                                    <div className={projectNum === idx ? "subdata_inner celect" : "subdata_inner"}
                                    style={{
                                    border : props.colorBtn ? "2px solid rgba(255,255,255,.3)" : "2px solid rgba(0,0,0,.3)",
                                    }}>
                                        <div>
                                            <div className="project_name">{item.project}</div>
                                            <div className="project_date">{item.projectDate}</div>
                                            <div className="project_summary">{item.projectSummary}</div>
                                        </div>
                                        <div className="button_warp">
                                            <button
                                            onClick={()=>setProjectNum(idx)}>
                                                <span>
                                                    작업물
                                                </span>
                                                <span>
                                                    미리보기
                                                </span>
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
                        background : "url(" + aboutProjectData[projectNum].imgUrl + ")",
                        }}
                        ref={detailRef}
                        >
                            <div className="projectdata_text">
                                <div className="projectdata_textbox" style={{
                                    color : props.colorBtn ? "black" : "white",
                                    background: props.colorBtn ? "rgba(255, 255, 255,.8)" : "rgba(51, 52, 55,.8)", 
                                }}>
                                    <div>{aboutProjectData[projectNum].projectData}</div>
                                    <div>{aboutProjectData[projectNum].projectSubData}</div>
                                </div>
                                <div className="projectlinkbtn">
                                    <a href={aboutProjectData[projectNum].projectLink} target="_blank" rel="noopener noreferrer">
                                        <button
                                        style={{
                                            color : props.colorBtn ? "black" : "white", 
                                            background: props.colorBtn ? "rgba(255, 255, 255,.8)" : "rgba(51, 52, 55,.8)", 
                                        }}>
                                            상세보기
                                        </button>
                                    </a>
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
