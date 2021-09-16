import React, { useEffect, useState, useRef } from 'react'
import './about.css'
function About(props) {

    const aboutData = [
        {
            careerDate: "2020.12.30",
            careerDateEnd: "재직중",
            careerCompany: "디어케어",
            careerPosition: "developer",
            careerLink: "https://dear.care",
        }
    ]

    const aboutProjectData = [
        {
            project: "대구 EXCO 설문폼 구축",
            projectLink: "https://gbforestexpo.co.kr/",
        },
        {
            project: "디어케어 반응형 구축",
            projectLink: "https://dear.care",
        },
    ]

    const aboutSkillData = [
        {
            skill: "React.js",
            skillimg: "./assets/icons/react.png"
        },
        {
            skill: "HTML5",
            skillimg: "./assets/icons/html.png"
        },
        {
            skill: "Scss",
            skillimg: "./assets/icons/sass.png"
        },
        {
            skill: "Search",
            skillimg: "./assets/icons/search.png"
        },
    ]
    
    const aboutSubSkillDefault = [
        {
            skill: "VScord",
            skillimg: "./assets/icons/vscode.png"
        },
        {
            skill: "HTML5",
            skillimg: "./assets/icons/html.png"
        },
        {
            skill: "CSS3",
            skillimg: "./assets/icons/css.png"
        },
        {
            skill: "JavaScript",
            skillimg: "./assets/icons/js.png"
        },
        {
            skill: "jQuery",
            skillimg: "./assets/icons/jquery.png"
        },
    ]

    const aboutSubSkillSpecial = [
        {
            skill: "React.js",
            skillimg: "./assets/icons/react.png"
        },
        {
            skill: "TypeScript",
            skillimg: "./assets/icons/typescript.png"
        },
        {
            skill: "Redux",
            skillimg: "./assets/icons/redux.png"
        },
        {
            skill: "Yarn",
            skillimg: "./assets/icons/yarn.png"
        },
    ]

    const aboutSubSkillSpecials = [
        {
            skill: "Photoshop",
            skillimg: "./assets/icons/photoshop.png"
        },
        {
            skill: "Illustrator",
            skillimg: "./assets/icons/illustrator.png"
        },
        {
            skill: "Oven",
            skillimg: "./assets/icons/oven.png"
        },
    ]

    const aboutSubSkillCooperation = [
        {
            skill: "Notion",
            skillimg: "./assets/icons/notion.png"
        },
        {
            skill: "NAS",
            skillimg: "./assets/icons/nas.png"
        },
        {
            skill: "Pigma",
            skillimg: "./assets/icons/pigma.png"
        },
        {
            skill: "Zepline",
            skillimg: "./assets/icons/zepline.png"
        },
    ]

    const aboutSubStudyData = [
        {
            skill: "API",
            skillimg: "./assets/icons/api.png",
            skilltext: "- Email.js, kakao, naver 등 웹 개발에 필요한 API 개발!"
        },
        {
            skill: "Firebase",
            skillimg: "./assets/icons/firebase.png",
            skilltext: "- 백엔드 서버와 API에 대한 이해를 위해 개인적으로 공부!"
        },
        {
            skill: "AWS",
            skillimg: "./assets/icons/aws.jpg",
            skilltext: "- 개인적으로 공부하며 개발한 웹앱 배포 및 서비스!"
        },
        {
            skill: "Github",
            skillimg: "./assets/icons/github.png",
            skilltext: "- 작업물 및 개인공부를 Git-hub에 업로드하여 생산성 향상!"
        },
        {
            skill: "Git",
            skillimg: "./assets/icons/git.png",
            skilltext: "- 협업을 위한 git을 cmd로 컨트롤 가능!"
        },
        
    ]

    const [position,setPosition] = useState(0)

    function onScroll(){
        setPosition(window.scrollY)
    }

    const bannerRef = useRef(null)

    const [bannerPosition,setBannerPosition] = useState(0)
    const [bannerMainHeight,setBannerMainHeight] = useState(0)
    const [bannerHeight,setBannerHeight] = useState(0)

    useEffect(()=>{
        window.addEventListener('scroll', onScroll)
        setBannerPosition(props.useref.current.offsetHeight)
        setBannerHeight(props.bannerHeightRef.current.offsetHeight)
        setBannerMainHeight(bannerRef.current.offsetHeight)
        return()=>{
            window.addEventListener('scroll', onScroll)
        }
    },[props.count])

    return (
        <div className="about_warp">
            <div className="about_date">
                <div>오늘날짜 : {props.count} </div>
                <div>업데이트 : {props.countTwo}</div>
            </div>
            <div className="about_inner">
                <div className="aboutbanner" style={{
                    border : props.colorBtn ? "1px solid white" : "1px solid black", 
                    boxShadow: props.colorBtn ? "5px 5px 20px rgba(255,255,255,.1)" : "5px 5px 20px rgba(0,0,0,.3)",
                    maxHeight: bannerPosition *1.5 + "px",
                    transform: position < (bannerHeight - bannerMainHeight) ? "translateY("+(position) + "px)" : "translateY("+(bannerHeight - bannerMainHeight) + "px)",
                }}
                ref={bannerRef}
                >
                    <div className="careerdata">
                        <h3>경력사항</h3>
                        {aboutData.map((item,idx)=>{
                            return(
                                <div key={idx} className="aboutdata_inner"  style={{
                                    border : props.colorBtn ? "1px solid white" : "1px solid black", 
                                }}>
                                    <div className="position">
                                        <div className="position_inner">
                                            <div>
                                                {item.careerCompany}
                                            </div>
                                            <button>
                                               <a href={item.careerLink} target="_blank" rel="noopener noreferrer">
                                                홈페이지
                                               </a>
                                            </button>
                                        </div>
                                        <div>
                                            {item.careerPosition}
                                        </div>
                                    </div>
                                    <div>
                                        {item.careerDate}
                                    </div>
                                    <div>
                                        ~
                                    </div>
                                    <div>
                                        {item.careerDateEnd}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="project_footer">
                        <div className="myimg">
                            <img src="./assets/common/notfound/notfound.png" alt="my_img" />
                        </div>
                    </div>
                </div>
                <div className="aboutcards" ref={props.bannerHeightRef}>
                    <div className="aboutcard lately" style={{
                                    border : props.colorBtn ? "1px solid white" : "1px solid black", 
                    }}>
                        <h3>최근작업</h3>
                        {aboutProjectData.map((item,idx)=>{
                            return(
                                <div key={idx} className="subdata">
                                    {item.project}
                                    <button>
                                        <a href={item.projectLink} target="_blank" rel="noopener noreferrer">
                                            클릭
                                        </a>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                    <div className="aboutcard skills">
                        <h3>주요기술</h3>
                        <div className="innertext">
                            <div>
                                - 기본적으로 퍼블리싱할 때 사용하는 언어 및 라이브러리!
                            </div>
                            <div>
                                - 전통적인 웹앱 제작 방식에서 정적인 HTML로 협업 시 사용하는 기술!
                            </div>
                            <div>
                                - 안되면 될때까지, 로컬 검색 기술!
                            </div>
                        </div>
                        {aboutSkillData.map((item,idx)=>{
                            return(
                                <div key={idx}>
                                    {item.skill}
                                    <img src={item.skillimg} alt="skill" />
                                </div>
                            )
                        })}
                    </div>
                    <div className="aboutcard" style={{
                        border : props.colorBtn ? "1px solid white" : "1px solid black", 
                    }}>
                        <h3>실무스킬 A</h3>
                        <div>Default</div>
                        <div className="innertext">
                            <div>
                                - 동적인 웹에 최적화된 자바스크립트 라이브러리, 리액트!
                            </div>
                            <div>
                                - 리엑트에서 중앙데이터 관리를 위한 리덕스 툴!
                            </div>
                            <div>
                                - npm 보다 생산성이 좋은 yarn!
                            </div>
                        </div>
                        {aboutSubSkillDefault.map((item,idx)=>{
                            return(
                                <div key={idx}>
                                    {item.skill}
                                    <img src={item.skillimg} alt="skill" />
                                </div>
                            )
                        })}
                    </div>
                    <div className="aboutcard" style={{
                        border : props.colorBtn ? "1px solid white" : "1px solid black", 
                    }}>
                        <h3>실무스킬 B</h3>
                        <div>Special I</div>
                        <div className="innertext">
                            <div>
                                - 동적인 웹에 최적화된 자바스크립트 라이브러리, 리액트!
                            </div>
                            <div>
                                - 안전한 변수 지정을 위한, 타입스크립트!
                            </div>
                            <div>
                                - 리엑트에서 중앙데이터 관리를 위한 리덕스 툴!
                            </div>
                            <div>
                                - npm 보다 생산성이 좋은 yarn!
                            </div>
                        </div>
                        {aboutSubSkillSpecial.map((item,idx)=>{
                            return(
                                <div key={idx}>
                                    {item.skill}
                                    <img src={item.skillimg} alt="skill" />
                                </div>
                            )
                        })}
                    </div>
                    <div className="aboutcard aboutskill" style={{
                        border : props.colorBtn ? "1px solid white" : "1px solid black", 
                    }}>
                        <h3>실무스킬 C</h3>
                        <div>Special II</div>
                        <div className="innertext">
                            <div>
                                - 기초적인 보정작업을 할 수 있는 포토샵!
                            </div>
                            <div>
                                - 기초적인 아이콘 디자인을 할 수 있는 일러스트!
                            </div>
                            <div>
                                - 프로토타이핑을 빠르게 하기 위한 카카오 오븐!
                            </div>
                        </div>
                        {aboutSubSkillSpecials.map((item,idx)=>{
                            return(
                                <div key={idx}>
                                    {item.skill}
                                    <img src={item.skillimg} alt="skill" />
                                </div>
                            )
                        })}
                    </div>
                    <div className="aboutcard" style={{
                        border : props.colorBtn ? "1px solid white" : "1px solid black", 
                    }}>
                        <h3>실무스킬 D</h3>
                        <div>협업</div>
                        <div className="innertext">
                            <div>
                                - Notion을 이용한 업무일지, 협업 경험!
                            </div>
                            <div>
                                - NAS를 이용한 대용량 파일 저장소 경험!
                            </div>
                            <div>
                                - Pigma,Zepline 을 이용한 퍼블리싱 경험!
                            </div>
                        </div>
                        {aboutSubSkillCooperation.map((item,idx)=>{
                            return(
                                <div key={idx}>
                                    {item.skill}
                                    <img src={item.skillimg} alt="skill" />
                                </div>
                            )
                        })}
                    </div>
                    <div className="aboutcard todo" style={{
                        border : props.colorBtn ? "1px solid white" : "1px solid black", 
                    }}
                    ref={props.useref}
                    >
                        <h3>개인공부</h3>
                        {aboutSubStudyData.map((item,idx)=>{
                            return(
                                <div key={idx} className="todowarp">
                                    <div className="todolist">
                                        <div>
                                            {item.skill}
                                        </div>
                                        <div>
                                            <img src={item.skillimg} alt="skill" />
                                        </div>
                                    </div>
                                    <div>
                                        {item.skilltext}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About