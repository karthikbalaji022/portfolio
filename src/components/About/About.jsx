import React,{useState} from "react";
import style from "./index.module.scss";
import TypeWriterEffect from "react-typewriter-effect";
import data from "../../assets/data/carddata";
import Typewriter from "../TypeWriterCard/Typewriter";
function About() {
    const [card,setCard]=useState({card1:false,card2:false,card3:false,card4:false});
    const revealBox={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%",
        flexDirection:"column"
    };

    const btnSyle={
        width:"60px",
        height: "30px",
        border:"0",
        outline:"none",
        borderRadius:"5px",
        backgroundColor:"rgba(0,0,0,.2)",
        color:"white",
        margin:"10px",
    };
  return (
    <div id="about" className={style.aboutContainer}>
      <h1>About Me</h1>
      <div className={style.aboutFlex}>
        <section className={style.typewriter}>
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              color: "white",
              fontWeight: 700,
              fontSize: "2.5em",
            }}
            startDelay={2000}
            cursorColor="pink"
            multiText={[
              "I'm a Programmer!",
              "I'm a Problem solver!",
              "I'm a Front end developer!",
              "I'm a Backend developer!",
              "I'm a Forever learner!",
            ]}
            multiTextDelay={1000}
            typeSpeed={30}
            multiTextLoop={"infinite"}
          />
        </section>
        <section className={style.aboutCards}>
          <div className={`${style.aboutCard} ${style.card1}`}>
          <Typewriter
              delay={1000}
              text={"Who is Karthik?"}
              speed={200}
              style={{ fontWeight: 700, fontSize: "1.3rem" }}
            />
            {card.card1===false?(
                <div style={revealBox}>
                click to reveal!
                <button style={btnSyle} onClick={()=>setCard((prev)=>{return{...prev,card1:true}})}>Reveal</button>
                </div>)
            :(
                <>
           
            <Typewriter
              delay={1000}
              text={data.card1}
              speed={100}
              style={{ fontWeight: 500, fontSize: "1.1rem",lineHeight:"30px" }}
              />
              </>
            )}
          </div>
          <div className={`${style.aboutCard} ${style.card2}`}>
            <Typewriter
              delay={1000}
              text={"What is Karthik's frontend stack?"}
              speed={200}
              style={{ fontWeight: 700, fontSize: "1.3rem" }}
            />
            {card.card2===false?(
                <div style={revealBox}>
                click to reveal!
                <button style={btnSyle} onClick={()=>setCard((prev)=>{return{...prev,card2:true}})}>Reveal</button>
                </div>)
            :(
                <>
           
            <ul style={{ padding: "0 4px", listStyle: "none" }}>
              {data.card2.map((item, i) => {
                return (
                  <li>
                    <Typewriter
                      delay={1000 + i * 1000}
                      text={item}
                      speed={100}
                      style={{ fontWeight: 500, fontSize: "1.1rem" }}
                    />
                  </li>
                );
              })}
            </ul>
            </>
            )}
          </div>
          <div className={`${style.aboutCard} ${style.card3}`}>
            <Typewriter
              delay={1000}
              text={"What is Karthik's Backend stack?"}
              speed={200}
              style={{ fontWeight: 700, fontSize: "1.3rem" }}
            />
            {card.card3===false?(
                <div style={revealBox}>
                click to reveal!
                <button style={btnSyle} onClick={()=>setCard((prev)=>{return{...prev,card3:true}})}>Reveal</button>
                </div>)
            :(
                <>
           
            <ul style={{ padding: "0 5px", listStyle: "none" }}>
              {data.card3.map((item, i) => {
                return (
                  <li>
                    <Typewriter
                      delay={1000 + i * 1000}
                      text={item}
                      speed={100}
                      style={{ fontWeight: 500, fontSize: "1.1rem" }}
                    />
                  </li>
                );
              })}
            </ul>
            </>
            )}
          </div>
          <div className={`${style.aboutCard} ${style.card4}`}>
            <Typewriter
              delay={1000}
              text={"What are Karthik's intrests?"}
              speed={200}
              style={{ fontWeight: 700, fontSize: "1.3rem" }}
            />
            {card.card4===false?(
                <div style={revealBox}>
                click to reveal!
                <button style={btnSyle} onClick={()=>setCard((prev)=>{return{...prev,card4:true}})}>Reveal</button>
                </div>)
            :(
                <>
           
            <ul style={{ padding: "0 5px", listStyle: "none" }}>
              {data.card4.map((item, i) => {
                return (
                  <li>
                    <Typewriter
                      delay={1000 + i * 1000}
                      text={item}
                      speed={100}
                      style={{ fontWeight: 500, fontSize: "1.1rem" }}
                    />
                  </li>
                );
              })}
            </ul>
            </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
