import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id +"*";
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) =>{
    return(
        <div className={s.message}> {props.message} </div>
    )
}
const Dialogs = (props) => {

    let dialogs = [
        {id:1, name: 'Valera'},
        {id:2, name: 'Nadeghda'},
        {id:3, name: 'Lubov'},
        {id:4, name: 'Vera'},
        {id:5, name: 'Genadyi'}
    ];

    let messages= [
        {id:1, message:"bla bla bla"},
        {id:2, message: "be be be"},
        {id:3, message:"mu mu"},
        {id:4, message:"avhahah"},
        {id:5, message:"hahaha"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name = {d.name} id={d.id}/>);
    let messagesElements = messages.map((m) => <Message message = {m.message}/>)
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs;