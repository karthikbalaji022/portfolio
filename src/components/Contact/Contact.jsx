import React,{useRef} from "react";
import style from "./index.module.scss";
import { FaSearchLocation, FaEnvelope, FaPhone } from "react-icons/fa";
const contact = React.forwardRef(({}, ref) => {
    const name=useRef();
    const email=useRef();
    const subject=useRef();
    const messsage=useRef();
    function handleSubmit(event){
        event.preventDefault();
        let n=name.current.value;
        let e=email.current.value;
        let s=subject.current.value;
        let m=messsage.current.value;
        console.log(n,e,s,m);
    }
  return (
    <div ref={ref} className={style.contactBox}>
      <div className={style.contactContainer}>
        <h1>Contact</h1>
        <div className={style.leftRight}>
          <div className={style.contactInfo}>
            <div className={style.infoleft}>
              <FaSearchLocation className={style.contactLogo} />
              <div className={style.right}>
                <h1>Location</h1>
                <p>Coimbatore,Tamilnadu,India</p>
              </div>
            </div>
            <div className={style.infoleft}>
              <FaEnvelope className={style.contactLogo} />
              <div className={style.right}>
                <h1>Email</h1>
                <p>karthikbalaji022@gmail.com</p>
              </div>
            </div>
            <div className={style.infoleft}>
              <FaPhone className={style.contactLogo} />
              <div className={style.right}>
                <h1>Phone</h1>
                <p>+91 9159022780</p>
              </div>
            </div>
            <div className={style.infoMap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250646.68136328788!2d76.82714556974858!3d11.012014523817232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1655751135069!5m2!1sen!2sin"
                className={style.map}
                height= "300px"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <form className={style.contactForm} onSubmit={(e)=>{handleSubmit(e)}}>
            <label>
              Name:
              <input type={"text"} className={style.name} placeholder="name..." ref={name} required/>
            </label>
            <label>
              Email:
              <input type={"Email"} className={style.mail}placeholder="email.." ref={email} required />
            </label>
            <label>
              Subject:
              <input type={"text"} className={style.number} placeholder="subject..." ref={subject} />
            </label>
            <label>
              Messsage:
              <textarea className={style.textbox} ref={messsage}  required></textarea>
            </label>
            <button type="submit" className={style.submit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default contact;
