import React from "react";

import Header from "./components/Header";
import InputSection from "./components/InputSections";
import ResultSection from "./components/ResultSection";

import { theadTitle, inputTitle } from "./constants/Constant.js";

const inPutValue = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [input, setInput] = React.useState(inPutValue);

  function handlerInputChange(newInput, title) {
    setInput((prevValue) => {
      return {
        ...prevValue,
        [title]: +newInput,
      };
    });
  }

  return (
    <>
      <Header />

      <div id="user-input">
        <ul className="input-group">
          <InputSection
            inputLabel={inputTitle.initialInvestment}
            onChange={handlerInputChange}
            title="initialInvestment"
          ></InputSection>
          <InputSection
            inputLabel={inputTitle.annaulInvestment}
            onChange={handlerInputChange}
            title="annualInvestment"
          ></InputSection>
        </ul>
        <ul className="input-group">
          <InputSection
            inputLabel={inputTitle.expectedReturn}
            onChange={handlerInputChange}
            title="expectedReturn"
          ></InputSection>
          <InputSection
            inputLabel={inputTitle.duration}
            onChange={handlerInputChange}
            title="duration"
          ></InputSection>
        </ul>
      </div>

      <ResultSection theadTitle={theadTitle} input={input} />
    </>
  );
}

export default App;
