
import React from 'react';
import { useState } from 'react';
import AgentAPI from "../API/AgentAPI.js";

export default function BaseForm(props) {
  const [acs, setACS] = useState(200);
  const [kd, setKD] = useState(1);
  const [adr, setADR] = useState(100);
  const [kpr, setKPR] = useState(0.5);
  const [apr, setAPR] = useState(0.5);
  const [fkpr, setFKPR] = useState(0.5);

  const submit = async(e) => {
    e.preventDefault();
    props.setPageState("loading");
    const response = await AgentAPI.getAgent({acs, kd, adr, kpr, apr, fkpr});
    console.log({acs, kd, adr, kpr, apr, fkpr})
    props.setAgent(response.data.Agent);
    props.setPageState("guess");
  }

  return (
    <div className='flex flex-col gap-y-5 w-3/4 sm:w-auto'>
      <h3 className='text-3xl'> Enter your stats</h3>
      <form className='flex-col flex justify-center gap-y-10'>
        <div className='flex flex-col sm:flex-row gap-y-3 gap-x-5'>
          <div className='flex flex-col w-[16rem]'>
            <label htmlFor="ACS">Average Combat Score (ACS)</label>
            <input
              type="number" id="ACS" name="ACS" defaultValue={200}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={e => setACS(e.target.value)}  
            />
          </div>
          <div className='flex flex-col w-[16rem]'>
            <label htmlFor="KD">Kill/Death Ratio (KD)</label>
            <input
              type="number" id="KD" name="KD" defaultValue={1}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
              onChange={e => setKD(e.target.value)}  
            />
          </div>
          <div className='flex flex-col w-[16rem]'>
            <label htmlFor="ADR">Average Damage Per Round (ADR)</label>
            <input
              type="number" id="ADR" name="ADR" defaultValue={100}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={e => setADR(e.target.value)}  
            />
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-y-3 gap-x-5 '>
          <div className='flex flex-col w-[16rem]'>
            <label htmlFor="KPR">Kills Per Round (KPR)</label>
            <input
              type="number" id="KPR" name="KPR" defaultValue={0.5}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={e => setKPR(e.target.value)} 
            />
          </div>
          <div className='flex flex-col w-[16rem]'>
            <label htmlFor="APR">Assists Per Round (APR)</label>
            <input
              type="number" id="APR" name="APR" defaultValue={0.5}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={e => setAPR(e.target.value)} 
            />
          </div>
          <div className='flex flex-col w-[16rem]'>
            <label htmlFor="FKPR">First Kills Per Round (FKPR)</label>
            <input
              type="number" id="FKPR" name="FKPR" defaultValue={0.5}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={e => setFKPR(e.target.value)} 
            />
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-y-3 gap-x-5 justify-evenly h-20 align-middle'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded sm:align-middle sm:w-40 h-12'
            onClick={e => submit(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
