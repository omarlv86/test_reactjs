import React,{ useState } from 'react'

export const HomeScreen = () => {

  const [inputs, setInputs] = useState([]);

  /**
  * Add Input Select
  * @auth Ricardo Lugo | ricardo.lugo@nuvem.mx
  * @date 2022-05-28
  * @param 
  * @return void
  */
  const addInputSelect = () => {
    const _uid = generateUUID();
    const label = generateRandomString();
    const newInput = {
      component: "select",
      label,
      type:"select",
      _uid
    }
    setInputs([ ...inputs, newInput]);
  }

  /**
  * Add Input Radio
  * @auth Ricardo Lugo | ricardo.lugo@nuvem.mx
  * @date 2022-05-28
  * @param 
  * @return void
  */
  const addInputRadio = () => {
    const _uid = generateUUID();
    const label = generateRandomString();
    const newInput = {
      component: "radio",
      label,
      type:"radio",
      _uid
    }
    setInputs([ ...inputs, newInput]);
  }

  /**
  * Add Input Text
  * @auth Ricardo Lugo | ricardo.lugo@nuvem.mx
  * @date 2022-05-28
  * @param 
  * @return void
  */
   const addInputText = () => {
    const _uid = generateUUID();
    const label = generateRandomString();
    const newInput = {
      component: "text",
      label: label,
      type:"text",
      _uid
    }
    setInputs([ ...inputs, newInput]);
  }


  /**Delete Input 
  * @auth Ricardo Lugo | ricardo.lugo@nuvem.mx
  * @date 2022-05-09
  * @param uid
  * @return void
  */
   const deleteInput = (uid) => {
    const newInputs = inputs.filter((input) => input._uid !== uid)
    setInputs(newInputs);
  }

  /**
  * generate UUID
  * @auth Ricardo Lugo | ricardo.lugo@nuvem.mx
  * @date 2022-05-28
  * @param 
  * @return string 
  */
  const generateUUID = () => { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  /**
  * Generate random label
  * @auth Ricardo Lugo | ricardo.lugo@nuvem.mx
  * @date 2022-05-28
  * @param 
  * @return string 
  */
  const  generateRandomString = () => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= Math.random().toString(36).substring(0,10);       

    return result1;
  }

  return (
    <div className='container mx-auto px-4'>
        <div className='flex flex-row'>

          <div className="basis-1/3 px-4 py-2">

            <div className="flex space-x-2 justify-center">
              <div>
                <button type="button" className="block px-6 py-2.5 my-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => addInputText()}>
                  Add input
                </button>

                <button type="button" className="block px-6 py-2.5  my-2 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => addInputSelect()}>
                  add select
                </button>
                
                <button type="button" className="block px-6 py-2.5  my-2 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out" onClick={() => addInputRadio()}>
                  add radio
                </button>
              </div>
            </div>
          </div>


          <div className="basis-2/3">
            {
              inputs.map((input) => (
                input.component === 'text' ? (
                  <div key={input._uid} className='flex flex-row'>
                  <div className="basis-2/3 px-4 py-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{input.label}</label>
                    <input type={input.type} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder={input.label} /> 
                  </div>
                  <div className="basis-1/3 px-4 py-2">
                    <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800" onClick={() =>deleteInput(input._uid)}>
                      Eliminar
                    </button>
                  </div>
                </div>
                ) : input.component ==='select' ? (
                  <div key={input._uid} className='flex flex-row'>
                    <div className="basis-2/3 px-4 py-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{input.label}</label>
                      <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>

                      <div className="basis-1/3 px-4 py-2">
                        <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800" onClick={() =>deleteInput(input._uid)}>
                          Eliminar
                        </button>
                      </div>
                </div>
                ) : (
                  <div key={input._uid} className='flex flex-row'>
                    <div className="basis-2/3 px-4 py-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{input.label}</label>
                      <div className="flex items-center mb-4">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
                      </div>
                      <div className="flex items-center">
                          <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                      </div>
                    </div>
                    <div className="basis-1/3 px-4 py-2">
                        <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800" onClick={() =>deleteInput(input._uid)}>
                          Eliminar
                        </button>
                      </div>
                  </div>
                )
              ))
            }
          </div>


        </div>
      </div>
  )
}

