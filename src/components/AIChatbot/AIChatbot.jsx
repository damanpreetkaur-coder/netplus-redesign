import {useState} from "react";
import "./AIChatbot.css";
function AIChatbot(){
    const [step ,setStep]=useState(1);
    const[answers,setAnswers]=useState({
        usage:"",
        devices:"",
        entertainment:""
    });
    const questions=[
        {
            question:" What do you use the internet for?",
            options:[
                "Gaming ",
                "Streaming",
                "Work From Home",
                "Basic Browsing",
            ],
            key:"usage",
        },
        {
            question:"How many devices are connected ?",
            options: [
                "1-2 Devices",
                "3-5 Devices",
                "5+ Devices",
            ],
            key:"devices",
        },
        {
            question:"Do you watch Live TV or OTT?",
            options:[
                "Live TV",
                "OTT",
                "Both ",
                "No ",
            ],
            key :"entertainment",
        },
    ];
    const currentQuestion= questions[step - 1];
    const handleOptionClick = (option ) => {
        setAnswers({
            ...answers,
            [currentQuestion.key]:option,
        });
    };
    return(
        <section className="ai-chatbot">
            <div className="chatbot-header">
                <h2>AI Broadband Advisor</h2>
                <p>
                    Answer just 3 simple questions and we'll recommend the perfect plan for you 
                </p>
            </div>
            <div className="chatbot-card">
                <div className="progress">
                    Step {step} of 3
                </div>
                <h3>
                   {currentQuestion.question}
                </h3>
                <div className="options">
                    {currentQuestion.options.map((option) => (
                        <button
  key={option}
  onClick={() => handleOptionClick(option)}
  className={
    answers[currentQuestion.key] === option ? "selected" : ""
  }
>
  {option}
</button>
                    ))}
                </div>
                <button className="next-btn"
                disabled={!answers[currentQuestion.key]}
                onClick={()=>{
                    if(step<3){
                        setStep(step + 1);
                    }
                }}>
                 Next   
                </button>
            </div>
        </section>
    );
}
export default AIChatbot;