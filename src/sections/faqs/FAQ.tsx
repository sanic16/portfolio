import Card from "../../components/Card";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";


type Props = {
    faq: { 
        question: string,
        answer: string
    }
}

const FAQ = (props: Props) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <Card 
        className="faq" 
        onClick={() => setShowAnswer(prev => !prev)}
    >
        <div>
            <h5 className="faq__question">
                {props.faq.question}
            </h5>
            <button className="faq__icon">
                {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
        </div>        
        {showAnswer && <p className="faq__answer">{props.faq.answer}</p>}
    </Card>
  )
}

export default FAQ