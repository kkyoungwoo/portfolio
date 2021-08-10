import React, { useEffect, useState, useRef } from 'react'
import './portfolio.css'

function Portfolio(props) {

    const aboutProjectData = [
        {
            project: "디어케어 반응형 구축",
            projectDate: "2019-01-01",
            projectSummary: "컴포넌트 구축",
            projectData: "ㅇㅇㅇ을 이용하여작업하였습니다.1",
            projectLink: "https://naver.com",
            contribute: 100,
            imgUrl: "",
        },
        {
            project: "디어케어 반응형 구축",
            projectDate: "2019-01-01",
            projectSummary: "컴포넌트 구축",
            projectData: "ㅇㅇㅇ을 이용하여작업하였습니다.2",
            projectLink: "https://naver.com",
            contribute: 100,
            imgUrl: "",
        },
        {
            project: "디어케어 반응형 구축",
            projectDate: "2019-01-01",
            projectSummary: "컴포넌트 구축",
            projectData: "ㅇㅇㅇ을 이용하여작업하였습니다.3",
            projectLink: "https://naver.com",
            contribute: 100,
            imgUrl: "",
        },
        {
            project: "디어케어 반응형 구축",
            projectDate: "2019-01-01",
            projectSummary: "컴포넌트 구축",
            projectData: "ㅇㅇㅇ을 이용하여작업하였습니다.4",
            projectLink: "https://naver.com",
            contribute: 100,
            imgUrl: "",
        },
        {
            project: "디어케어 반응형 구축",
            projectDate: "2019-01-01",
            projectSummary: "컴포넌트 구축",
            projectData: "ㅇㅇㅇ을 이용하여작업하였습니다.5",
            projectLink: "https://naver.com",
            contribute: 100,
            imgUrl: "",
        },
        {
            project: "디어케어 반응형 구축",
            projectDate: "2019-01-01",
            projectSummary: "컴포넌트 구축",
            projectData: "ㅇㅇㅇ을 이용하여작업하였습니다.6",
            projectLink: "https://naver.com",
            contribute: 100,
            imgUrl: "",
        },
        {
            project: "디어케어 반응형 구축",
            projectDate: "2019-01-01",
            projectSummary: "컴포넌트 구축",
            projectData: "ㅇㅇㅇ을 이용하여작업하였습니다.7",
            projectLink: "https://naver.com",
            contribute: 100,
            imgUrl: "",
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
                        top: position > latelyRefPosition - 100 ? "100px" : "0",
                        right: position > latelyRefPosition - 100 ? "30px" : "0",
                        width: position > latelyRefPosition - 100 ? "calc(50% - 30px)" : "50%",
                        }}
                        ref={detailRef}
                        >
                            {aboutProjectData[projectNum].projectData}
                            {aboutProjectData[projectNum].projectLink}
                            {aboutProjectData[projectNum].contribute}
                            {aboutProjectData[projectNum].imgUrl}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Portfolio
