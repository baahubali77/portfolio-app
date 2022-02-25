import "./testimonials.scss";
import { FaGoogle } from "react-icons/fa";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      people: "assests/manImage.png",
      icon: <FaGoogle />,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam eveniet voluptatem incidunt maxime! Eaque, unde fugit! Sedvoluptates corrupti in ipsa! Tempora, voluptatem harum at namquia blanditiis libero, quam facilis accusantium minima aut.",
      name: "Name",
      title: "Title",
      featured: false,
    },
    {
      id: 2,
      people: "assests/manImage.png",
      icon: <FaGoogle />,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam eveniet voluptatem incidunt maxime! Eaque, unde fugit! Sedvoluptates corrupti in ipsa! Tempora, voluptatem harum at namquia blanditiis libero, quam facilis accusantium minima aut.",
      name: "Name",
      title: "Title",
      featured: true,
    },
    {
      id: 3,
      people: "assests/manImage.png",
      icon: <FaGoogle />,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam eveniet voluptatem incidunt maxime! Eaque, unde fugit! Sedvoluptates corrupti in ipsa! Tempora, voluptatem harum at namquia blanditiis libero, quam facilis accusantium minima aut.",
      name: "Name",
      title: "Title",
      featured: false,
    },
  ];
  return (
    <div className="testimonials" id="testimonial">
      <div className="main">
        <h1>TESTIMONIAL</h1>

        <div className="container">
          {data.map((d) => (
            <div className={d.featured ? "card featured" : "card"}>
              <div className="images">
                <img src="assests/right-arrow.png" className="arrow" alt="" />
                <img src={d.people} className="person" alt="" />
                <div className="icon">{d.icon}</div>
              </div>
              <div className="desc">
                <p>{d.desc}</p>
              </div>
              <div className="name">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
