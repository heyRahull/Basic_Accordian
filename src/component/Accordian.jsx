import { useState } from "react";

const Accordian = ({ faq }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="accordian">
      <h3>
        {faq.question}
        <span onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "-" : "+"}
        </span>
      </h3>
      <p>{isVisible ? faq.answer : ""}</p>
    </div>
  );
};

export default Accordian;
