import { NextPage } from "next";
import { Spinner } from "react-bootstrap";
import classes from './spinner.module.scss'

interface Props {
    isVisible: boolean
}

export const SpinnerContainer: NextPage<Props> = ({isVisible}) => {
    if (!isVisible) {
        return null
    }
    return (
        <div className={classes.spinner__container}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}
