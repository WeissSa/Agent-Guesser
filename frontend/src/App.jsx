import BaseForm from "./components/BaseForm";
import { useState } from "react";
import LoadingSVG from "./images/loading.svg";
import agentToClassMap from "./tools/agentToClass.js";
import sentinelPNG from "./images/Sentinel.png";
import initiatorPNG from "./images/Initiator.png";
import controllerPNG from "./images/controller.png";
import duelistPNG from "./images/Duelist.png";

const STATES = [
  "form",
  "loading",
  "guess"
];

const classPNGMap = {
  "sentinel": sentinelPNG,
  "controller": controllerPNG,
  "duelist": duelistPNG,
  "initiator": initiatorPNG,
}

const classToRoleMap = {
  "duelist": "Chamber",
  "initiator": "Sage",
  "sentinel": "Viper",
};

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
        <div className="flex flex-col w-full justify-center py-2">
          <div className="pb-10 flex flex-col sm:flex-row justify-around w-full gap-y-10">
            <div className="flex flex-col justify-center w-fit mx-auto sm:mx-0 gap-y-4">
              <img src={`https://www.vlr.gg/img/vlr/game/agents/${agent}.png`} alt={agent} />
              <p className="text-center">
                Our best guess is you played: <br/>
                {agent.slice(0, 1).toUpperCase() + agent.slice(1)}
              </p>
            </div>
            <div className="flex flex-col justify-center sm:mx-0 mx-auto gap-y-4">
              <img src={classPNGMap[agentToClassMap[agent]]} alt={agentToClassMap[agent]} className=" w-52 h-52" />
              <p className="text-center w-52">
                If you didn't play {agent.slice(0, 1).toUpperCase() + agent.slice(1)}, did you play another {agentToClassMap[agent]}?
              </p>
            </div>
            {agentToClassMap[agent] !== "controller" && 
              <p className="text-center w-52 my-auto mx-auto sm:mx-0">
                If your agent's class is not correct, then did you play {classToRoleMap[agentToClassMap[agent]]}? <br/>
                These agents often get stats similar to another class due to their in-game role.
              </p>
            }
          </div>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded sm:align-middle w-fit mx-auto h-12'
            onClick={() => setPageState(STATES[0])}
          >
            Make another guess
          </button>
        </div>
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
