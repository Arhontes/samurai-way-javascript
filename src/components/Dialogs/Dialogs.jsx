import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElement = props.data.dialogsPage.dialogs.map(d=> <DialogItem name={d.name} id={d.id} />);
    let messagesElement = props.data.dialogsPage.messages.map(message=><Message message={message.message} />);
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}
export default Dialogs;