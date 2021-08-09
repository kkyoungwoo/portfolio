import React from 'react'
import './notfound.css'

function NotFound() {
    return (
        <div className="notfound">
            <h2>요청하신 페이지를 찾을 수 없습니다.</h2>
            <h2>이전화면으로 돌아가주세요.</h2>
            <img src="./assets/common/notfound/notfound.png" alt="notfound" />
        </div>
    )
}

export default NotFound
