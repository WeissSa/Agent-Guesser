import React from 'react';
import agentToClassMap from "../tools/agentToClass.js";
import sentinelPNG from "../images/Sentinel.png";
import initiatorPNG from "../images/Initiator.png";
import controllerPNG from "../images/controller.png";
import duelistPNG from "../images/Duelist.png";

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

  const agentToAltRole = {
    "chamber": "duelist",
    "sage": "initiator",
    "viper": "sentinel",
  };
  

export default function AgentDisplayer(props) {
    const agent = props.agent;
    const setPageState = props.setPageState
    const agentClass = agentToClassMap[agent];

    return <div className="flex flex-col w-full justify-center py-2">
      <div className="pb-10 flex flex-col sm:flex-row justify-around w-full gap-y-10">
        <div className="flex flex-col justify-center w-fit mx-auto sm:mx-0 gap-y-4">
          <img src={`https://www.vlr.gg/img/vlr/game/agents/${agent}.png`} alt={agent} />
          <p className="text-center">
            Our best guess is you played: <br />
            {agent.slice(0, 1).toUpperCase() + agent.slice(1)}
          </p>
        </div>
        <div className="flex flex-col justify-center sm:mx-0 mx-auto gap-y-4">
          <img src={classPNGMap[agentClass]} alt={agentClass} className=" w-52 h-52" />
          <p className="text-center w-52">
            If you didn't play {agent.slice(0, 1).toUpperCase() + agent.slice(1)}, did you play another {agentClass}?
          </p>
        </div>
        <div className='flex flex-col'>
            {agentClass !== "controller" &&
            <p className="text-center w-52 my-auto mx-auto sm:mx-0">
                If your agent's class is not correct, then did you play {classToRoleMap[agentClass]}? <br />
                These agents often get stats similar to another class due to their in-game role.
            </p>}
            {["viper", "chamber", "sage"].includes(agent) && 
                <p className="text-center w-52 my-auto mx-auto sm:mx-0">
                    Since you got {agent.slice(0, 1).toUpperCase() + agent.slice(1)} it is also possible you were a {agentToAltRole[agent]} for a similar reason as above.
                </p>
            }
        </div>
      </div>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded sm:align-middle w-fit mx-auto h-12'
        onClick={() => setPageState("form")}
      >
        Make another guess
      </button>
    </div>;
  }