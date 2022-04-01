import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog+ ' ' + s.active}>
                    Sasha
                </div>
                <div className={s.dialog}>
                Sasha
                </div>
                <div className={s.dialog}>
                Sasha
                </div>

            </div>
            <div className={s.messages}>

            <div className="message"> Hi</div>
            <div className="message">How are you</div>
            <div className="message">I'm fine, thanks</div>
        </div>
        </div>

    )
}
export default Dialogs;