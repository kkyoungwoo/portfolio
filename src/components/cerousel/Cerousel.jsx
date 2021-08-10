import React, { useState, useEffect, useCallback} from 'react'
import './cerousel.css'

const cerouselData = [
    {
        text: "처음",
        imgLink: "",
    },
    {
        text: "산림박람회",
        imgLink: "",
    },
    {
        text: "아이코코",
        imgLink: "",
    },
    {
        text: "마지막",
        imgLink: "",
    },
]

const CARD_SIZE = 150;
const CARD_MARGIN = 30;

function Cerousel() {

    const [page, setPage] = useState(0);
    const [touch, setTouch] = useState(false);
    const [firstX, setFirst] = useState(0);
    const [secondX, setSecond] = useState(0);
    const [startTime, setTime] = useState(0);
    const [itemX, setContainer] = useState(0);

    useEffect(() => {
        {/*const containerPosition = page < cerouselData.length-2 ? (CARD_SIZE + CARD_MARGIN) * (1 + page) : (CARD_SIZE + CARD_MARGIN) * (page -2);*/}
        const containerPosition = (CARD_SIZE + CARD_MARGIN) * (1 + page)
            if (touch) {
                setContainer(containerPosition - (secondX - firstX));
            } else {
                setContainer(containerPosition);
            }
    }, [touch, secondX, firstX, page]);

    const handleMouseStart = useCallback((e) => {
    setTouch(true);
    setTime(e.nativeEvent.timeStamp);
    setFirst(e.nativeEvent.clientX);
    setSecond(e.nativeEvent.clientX);
  }, []);

  const handleMouseMove = useCallback((e) => {
    setSecond(e.nativeEvent.clientX);
  }, []);


  const handleTouchStart = useCallback((e) => {
    setTouch(true);
    setTime(e.nativeEvent.timeStamp);
    setFirst(e.nativeEvent.targetTouches[0].clientX);
    setSecond(e.nativeEvent.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setSecond(e.nativeEvent.targetTouches[0].clientX);
  }, []);

  const calcPage = useCallback(
    (delta) => {
      let nextPage = 0;
      const pageValue = parseInt((delta + CARD_SIZE) / (CARD_SIZE * 2));

      if (secondX > firstX) nextPage = page - pageValue;
      else nextPage = page + pageValue;

      return nextPage;
    },
    [page, firstX, secondX]
  );

  const handleEnd = useCallback(
    (e) => {
      const lastTime = e.nativeEvent.timeStamp;
      const delta = Math.abs(secondX - firstX);
      let nextPage = 0;

      if (lastTime - startTime < 400) {
        if (delta < CARD_SIZE && delta > CARD_SIZE / 6) {
          nextPage = calcPage(delta + CARD_SIZE);
        } else {
          nextPage = calcPage(delta);
        }
      } else {
        nextPage = calcPage(delta);
      }

      if (nextPage > cerouselData.length - 1) nextPage = cerouselData.length - 1;
      else if (nextPage < 0) nextPage = 0;

      setTouch(false);
      setPage(nextPage);
      console.log(secondX)
      setFirst(0);
      setSecond(0);
    },
    [firstX, secondX, startTime, cerouselData.length, calcPage]
  );


    return (
        <div className="cerousel_wrap">
            <h1>작업 업체 리스트</h1>
           <div className="cerousel_cards"
            onMouseDown={handleMouseStart}
            onMouseMove={handleMouseMove}
            onMouseUp={handleEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleEnd}
            >
               {cerouselData.map((item,idx)=>{
                   return(
                    <div key={idx} className="cerousel_card" style={{
                        minWidth:CARD_SIZE,
                        transform: "translateX(-" + (itemX - CARD_SIZE) + "px)",
                        transition: !touch ? "all 0.2s ease" : "none",
                    }}>
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
