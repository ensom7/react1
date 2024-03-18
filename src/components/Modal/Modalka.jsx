import { useState } from "react";
import Modal from 'react-modal'
import CreatePage from '../../pages/CreatePage/CreatePage'
import './Modalka.css'
export default function Modalka(){
    const [modalIsOpen,setModalIsOpen] = useState(false)

    function showModal(){
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
    }

    return(
        <div >
        <button className="btn_modal" onClick={showModal}>Заказать</button>
        <Modal isOpen={modalIsOpen} className=''>
            <div className="modal">
                <CreatePage setModalIsOpen={setModalIsOpen} />
                <button onClick={closeModal}>Закрыть</button> 
            </div>
        </Modal>
        </div>
    )
}