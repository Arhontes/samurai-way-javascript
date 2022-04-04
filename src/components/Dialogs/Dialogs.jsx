import s from './Dialogs.module.css'

import messagesElement from "./Message/Message";
import dialogsElement from "./DialogItem/DialogItem";

const Dialogs = (props) => {
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