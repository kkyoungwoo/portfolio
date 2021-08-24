import React,{ useState,useEffect } from 'react'
import emailjs from "emailjs-com";
import './mail.css'

function Mail(props) {

    const [yearX,setYearX] = useState(0)
    const today = new Date();
    
    useEffect(() => {
        setYearX(today.getFullYear() - 2020)
    }, [])

    const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_portfolio",
        "template_p8sz9ss",
        e.target,
        "user_YOvzVUT3C3OBySLzLPves"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("메일이 정상적으로 발송되었습니다.")
        },
        (error) => {
          console.log(error.text);
          alert("메일이 발송되지 않았습니다. 연락처 : 010-4242-3088")
        }
      );
  };

    return (
        <div className="mail_wrap">
            <div className="mail_title" style={{
                border : props.colorBtn ? "1px solid white" : "1px solid black",
            }}>
                <span> {yearX} </span>년차 퍼블리셔 & UI/UX 컴포넌트 개발자 고경우입니다.
                <br/><br/>
                항상 발전하는 자세, 한결같은 마음가짐으로 업무에 임하고 싶습니다.
                <br/><br/>
                문의사항이 있으시다면 언제든지 메일을 보내주세요.
            </div>
            <form encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
                <div className="input_text">
                    <div>이름</div>
                    <input type="text" name="message" />
                </div>
                <div className="input_text">
                    <div>전화번호</div>
                    <input type="text" name="phone" />
                </div>
                <div className="textarea_text">
                    <div>문의내용</div>
                    <textarea name="textarea" id="" cols="30" rows="10" style={{resize: "none"}}></textarea>
                </div>
                <button type="submit">이메일 발송</button>
            </form>
        </div>
    )
}

export default Mail
