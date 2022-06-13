import "./styles.css";
import data from "./data";
import { Accordian } from "./Accordian";

export default function App() {
  return (
    <div className="App">
      {data.map(({ title, content }, index) => (
        <Accordian
          title={title}
          content={content}
          key={index}
          fontSize={20}
          fontWeight={900}
        />
      ))}
    </div>
  );
}
