import BaseForm from "./components/BaseForm";
import { useState } from "react";

function App() {

  const [agent, setAgent] = useState("None");


  return (
    <div className="w-screen h-screen bg-neutral-900 text-neutral-200">
      <div className="justify-center my-auto py-20">
        <h1 className="text-9xl text-center">
          Valorant Agent Guesser
        </h1>
        <h2 className="text-center pt-12 w-1/2 mx-auto text-lg">
          Input your Valorant stats and the website will guess what agent you play/main using a categorization algorithm trained using gaussian naive bayes and scikit learn.
        </h2>
        <p className="text-center pt-2 text-sm mx-auto w-1/2">
          *This model was trained using pro-player data averaged across multiple games. It will work best on stats which are averaged across multiple games from a high level of play.
        </p>
        <div className="w-full justify-center flex pt-10">
          <BaseForm setAgent={setAgent}/>
        </div>
        {agent}
      </div>
    </div>
  );
}

export default App;
