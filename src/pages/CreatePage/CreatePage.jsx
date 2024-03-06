import { useState } from "react";
import './CreatePage.css'

export default function CreatePage (){
    const[message,setMessage] = useState()

    function createForm(event){
        event.preventDefault()
        const formData = new FormData(event.target)

        fetch('https://jsonplaceholder.typicode.com/posts', {method:'POST', body:formData})
        event.target.reset()
        setMessage('Форма отправлена')
    }
    return(
        <div className="create">
        <h1>Добавление</h1>
        <form className="form_create" onSubmit={createForm}>
            <label>Название</label>
            <input type="text" className="name_create" name="title"/>
            <label>Описание</label>
            <textarea name="body" className="opis"></textarea>
            <button className="btn_create" type="submit">Добавить</button>
            {message}
        </form>
        </div>
    )
}