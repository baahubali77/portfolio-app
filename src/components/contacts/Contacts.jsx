import { useState } from "react";
import "./contact.scss";

const Contacts = () => {
  const [msg, setMsg] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setMsg(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="img-container">
        <img src="assests/contact.svg" alt="no" />
      </div>

      <div className="form-container">
        <div className="form">
          <form onSubmit={submitHandler}>
            <h2>Contact.</h2>
            <input type="text" placeholder="Enter Email" />
            <textarea placeholder="Wassup?"></textarea>
            <button>Submit</button>
            {msg && <span>Thanks, I will Contact you sooon !!</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
