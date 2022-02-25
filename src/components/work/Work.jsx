import './work.scss'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'
import {workData} from '../../workData/workData'
import { useEffect, useState } from 'react'
  let curr = 0;

const Work = () => {
  const [workEl, setworkEl] = useState({});


  
  const rightHandler = () => {
    console.log(curr)

     curr += 1;
    if (curr === workData.length) {
      curr = 0;
    } 
  setworkEl(workData[curr])

  }

  const leftHandler = () => {
      curr -= 1;

    if (curr === -1) {
      curr = workData.length-1;
    } 
    console.log(curr)

    setworkEl(workData[curr])
  }

  return (
    <div className='works' id='work'>
      <div className="slider">
        <div className="left">
          <button onClick={leftHandler}><FaAngleLeft/></button>
        </div>
        <div className="middle">
          <div className="item">
            <div className="img-container">
            <img src={workEl.img} alt="" />

            </div>
            <div className="text-container">
              <h2>{workEl.title}
              <div className="underline"></div>
              </h2>
              <p>{workEl.text}</p>
            </div>
          </div>
        </div>
        <div className="right">
            <button onClick={rightHandler}><FaAngleRight/></button>
        </div>
      </div>
    </div>
  )
}

export default Work 
