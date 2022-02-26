import { useState } from "react";
import "./portfolio.scss";
import { portfolioList } from "./portfolioListData";

const Portfolio = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="portfolio" id="portfolio">
      <h1>PORTFOLIO</h1>

      <div className="portfolio-list">
        <ul className="list">
          {portfolioList.map((listEl) => {
            return (
              <li
                className={listEl.id === selected ? "item active" : "item"}
                onClick={() => setSelected(listEl.id)}>
                {listEl.text}
              </li>
            );
          })}
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
  );
};

export default Portfolio;
