import { useState } from "react";
import './Accordion.css'
 export default function Accordion ({title,content}){
    const [isActive,setIsActive] = useState(false)

    return(
        <>
        <div className="accordion_item">
            <div className="accordion_title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div className="pl">{isActive ? '-' : '+'}</div>
            </div>
            {isActive &&
                    <div className="accordion_content">{content}</div>
            }
        </div>
        </>
    )
 }