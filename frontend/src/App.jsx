import BaseForm from "./components/BaseForm";
import { useState } from "react";
import LoadingSVG from "./images/loading.svg";
import AgentDisplayer from "./components/AgentDisplayer";


const STATES = [
  "form",
  "loading",
  "guess"
];

function App() {

  const [agent, setAgent] = useState("None");
  const [state, setPageState] = useState(STATES[0]);


  const renderMainContent = () => {
    if (state === STATES[0]) {
      return (
        <BaseForm
            setAgent={setAgent}
            setPageState={setPageState}
        />
      )
    } else if (state === STATES[1]) {
      return (
        <img src={LoadingSVG} alt="Loading"
            className="animate-spin"
        />
      )
    } else if (state === STATES[2]){
      return (
        <AgentDisplayer agent={agent} setPageState={setPageState} />
      )
    }
  }

  return (
    <div className="w-screen h-screen bg-neutral-900 text-neutral-200">
      <div className="justify-center my-auto py-20 flex flex-col">
        <h1 className="text-9xl text-center">
          Valorant Agent Guesser
        </h1>
        <h2 className="text-center pt-12 w-1/2 mx-auto text-lg">
          Input your Valorant stats and the website will guess what agent you play/main using a categorization algorithm trained using gaussian naive bayes and scikit learn.
        </h2>
        <p className="text-center pt-2 text-sm mx-auto w-1/2">
          *This model was trained using pro-player data averaged across multiple games. It will work best on stats which are averaged across multiple games from a high level of play.
        </p>
        <div className="justify-center flex pt-10 drop-shadow-lg bg-neutral-800 box-border rounded-lg w-full sm:w-[40rem] lg:w-[60rem] px-10  mx-auto my-10 border border-neutral-700  ">
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
}

export default App;


