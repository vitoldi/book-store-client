import { NextPage } from "next";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { BookPostDto } from "../../api/books/book-types";
import classes from './add-book-form.module.scss'
import { Button } from "react-bootstrap";
import { addBookValidation } from "./add-book-validation";
import { booksClientApi } from "../../api/books/books-api";

const textInputs: Array<keyof Omit<BookPostDto, 'image'>> = ['title', 'author', 'year', 'price', 'description']

const initialValues: Omit<BookPostDto, 'image'> = {
    title: '',
    price: '',
    year: '',
    description: '',
    author: '',
}

export const AddBookForm: NextPage = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [errorMessage, setErrorMessage] = useState('')
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
                booksClientApi.post(bookPost)
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