import './portfolio.scss'

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>PORTFOLIO</h1>

      <div className="portfolio-list">
        <ul className='list'>
          <li className="item">TYPE-1</li>
          <li className="item">TYPE-2</li>
          <li className="item">TYPE-3</li>
          <li className="item">TYPE-4</li>
          <li className="item">TYPE-5</li>
        </ul>
      </div>

      <div className="item-container">
        <div className="type">
          <img src="assests/featured1.jpg" alt="" />
          
          <h3>ITEM TYPE 1</h3>
        </div>
         <div className="type">
          <img src="assests/featured1.jpg" alt="" />
          
          <h3>ITEM TYPE 2</h3>
        </div>
         <div className="type">
          <img src="assests/featured1.jpg" alt="" />
          
          <h3>ITEM TYPE 3</h3>
        </div>
         <div className="type">
          <img src="assests/featured1.jpg" alt="" />
          
          <h3>ITEM TYPE 4</h3>
        </div>
         <div className="type">
          <img src="assests/featured1.jpg" alt="" />
          
          <h3>ITEM TYPE 5</h3>
        </div>
         <div className="type">
          <img src="assests/featured1.jpg" alt="" />
          
          <h3>ITEM TYPE 6</h3>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
