import Image from "next/image"
import { Card } from "react-bootstrap"
import classes from "./aphorism-card.module.scss"

export const AphorismCard = () => {
    return (
        <>
            <div className={classes.wrapper}>
                <Card className={classes.card}>
                    <div className={classes.card__image}>
                        <Image src='/carl_sagan.jpeg' alt='' width='110px' height='150px'/>
                    </div>
                    <div className={classes.card__text}>
                        <div className={classes.card__text_aph}>
                            {`"One glance at a book and you hear the voice of another person, perhaps someone dead 
                            for 1,000 years. To read is to voyage through time."`}
                        </div>
                        <div className={classes.card__text_author}>
                            Carl Sagan
                        </div>
                    </div>
                </Card>

                <Card className={classes.card}>
                    <div className={classes.card__image}>
                        <Image src='/mark-twain.jpg' alt='' width='110px' height='150px'/>
                    </div>
                    <div className={classes.card__text}>
                        <div className={classes.card__text_aph}>
                            {`"Good friends, good books, and a sleepy conscience: this is the ideal life."`}
                        </div>
                        <div className={classes.card__text_author}>
                            Mark Twain
                        </div>
                    </div>
                </Card>

                <Card className={classes.card}>
                    <div className={classes.card__image}>
                        <Image src='/oscar-wilde.jpeg' alt='' width='110px' height='150px'/>
                    </div>
                    <div className={classes.card__text}>
                        <div className={classes.card__text_aph}>
                            {`"It is what you read when you don't have to that determines what you will be when you can't help it."`}
                        </div>
                        <div className={classes.card__text_author}>
                            Oscar Wilde
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}