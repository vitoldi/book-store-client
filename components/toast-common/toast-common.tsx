import { NextPage } from "next";
import { useState } from "react";
import { ButtonGroup, Toast, ToastContainer } from "react-bootstrap";
import { ToastBackgrounds } from "../../core/bootstrap-types";
import classes from "./toast-common.module.scss"

type ToastMessages = 
    | 'Http request error'
    | 'Book added successfully'
    | 'Book deleted successfully'

interface Props {
    text: ToastMessages,
    background: ToastBackgrounds,
    removeTrigger: () => void
}

export const ToastCommon: NextPage<Props> = ({text, background, removeTrigger}) => {
    const [show, setShow] = useState(true);

    return (
        <div className={classes.toast}>
                <Toast 
                    onClose={() => {
                        setShow(false)
                        removeTrigger()
                    }}
                    show={show} 
                    bg={background} 
                    autohide 
                    delay={3000}>
                    <Toast.Body>{text}</Toast.Body>
                </Toast>
        </div>
    );
}