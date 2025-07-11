import Accordian from "./Accordian";
import data from "../data";

const Faq = () => {
  return (
    <div>
      <h1>Faq List</h1>
      {data.map((faq) => (
        <Accordian faq={faq} />
      ))}
    </div>
  );
};

export default Faq;
