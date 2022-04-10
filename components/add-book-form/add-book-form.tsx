import { NextPage } from "next";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { BookPostDto } from "../../api/books/book-types";
import classes from './add-book-form.module.scss'
import { Button } from "react-bootstrap";
import { addBookValidation } from "./add-book-validation";
import { BooksSelector, fetchBooks, postBook } from "../../redux/books-reducer";
import { useDispatch, useSelector } from "react-redux";

const textInputs: Array<keyof Omit<BookPostDto, 'image'>> = ['title', 'author', 'year', 'price', 'description']

const initialValues: Omit<BookPostDto, 'image'> = {
    title: '',
    price: '',
    year: '',
    description: '',
    author: '',
}

interface Props {
    onClose: () => void
}

export const AddBookForm: NextPage<Props> = ({onClose}) => {
    const [selectedFile, setSelectedFile] = useState<File>(null as unknown as File)
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()
    const {limit, offset} = useSelector(BooksSelector)
    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            const bookPost: BookPostDto = {
                ...values,
                image: selectedFile
            }
            const validationError = addBookValidation(bookPost)
            if (validationError) {
                setErrorMessage(validationError)
            } else {
                setErrorMessage('')
                dispatch(postBook(bookPost))
                dispatch(fetchBooks({limit, offset}))
                onClose()
            }
        },
      });

    return (
        <form onSubmit={formik.handleSubmit} className={classes.form}>
            <div className={classes.form__inputGroup}>
                <div className={classes.form__inputGroup__text}>
                    {textInputs.map((input, index) => {
                        return (
                            <div key={input+index} className={classes.form__inputGroup__text_input}>
                                <div className={classes.form__inputGroup__input_label}>
                                    <label htmlFor={input}>{input}:</label>
                                </div>
                                <div className={classes.form__inputGroup__input_input}>
                                    <input
                                        id={input}
                                        name={input}
                                        type='text'
                                        onChange={formik.handleChange}
                                        value={formik.values[input]}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                <div className={classes.form__inputGroup__file}>
                    <div className={classes.form__inputGroup__input_label}>
                        <label htmlFor="image">image:</label>
                    </div>
                    <div className={classes.form__inputGroup__input_input}>
                        <input
                            id="image"
                            name="image"
                            type="file"
                            onChange={(event) => {
                                event.currentTarget.files &&
                                setSelectedFile(event.currentTarget.files[0]);
                            }}
                        />
                    </div>
                    <div className={classes.errorMessage}>
                        <span>{errorMessage}</span>
                    </div>
                </div> 
            </div>
            <div className={classes.form__submitButton}>
                <Button type="submit">Submit</Button>
            </div>
        </form>
    )
}