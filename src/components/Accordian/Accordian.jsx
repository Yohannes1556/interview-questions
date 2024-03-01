import React, { useState } from 'react'
import './Accordian.css'
import data from './data.js'

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multi, setMulti] = useState([]);
  

  function handleSelcted (targetId){

    setSelected(selected === targetId ? null:targetId);
    
  }
  function handleMultiSelected(targetId){
    let cpyMulti = [...multi];
    const indexOfSelected = cpyMulti.indexOf(targetId);

    if(indexOfSelected === -1 ) cpyMulti.push(targetId);
    else cpyMulti.splice(indexOfSelected,1)

    setMulti(cpyMulti);
  }

  function handleEnable(){
    setEnableMulti(!enableMulti);
  }


  console.log(multi)

  return (
    <div className="wrapper">
      <button onClick={()=>handleEnable()}>Enable multi selection</button>
      <div className="accordion">{
        data.map((dataItem)=>(
          <div className='item'>
            <div className="title" onClick={()=>enableMulti ? handleMultiSelected(dataItem.id):handleSelcted(dataItem.id)}>
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
              {
                enableMulti ? multi.indexOf(dataItem.id) !==-1 && <div className="content">{dataItem.answer}</div> :
                selected === dataItem.id && <div className="content">
                {dataItem.answer}
              </div> 
              }
           
              


            
          </div>
        ))
      }
        
        
      </div>
    </div>
  )
}

export default Accordian;
