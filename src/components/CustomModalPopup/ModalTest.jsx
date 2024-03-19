import React, { useState } from "react";
import "./Modal.css";
import Modal from "./Modal";

function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggle(){

        setShowModalPopup(!showModalPopup)
    }
    function onClose(){
        setShowModalPopup(false)
    }
  return (
    <div>
      <button onClick={handleToggle}>open modal popup</button>

        {
            showModalPopup && <Modal onClose={onClose} body={<div>customized body</div>}/>
        }

    </div>
  );
}

export default ModalTest;
