import { BookPostDto } from "../../api/books/book-types"

enum ErrorMessage {
    EMPTY_FIELD = 'Field must not be empty',
    NO_IMAGE = 'No image picked',
    FILE_EXTENSION = 'Image must have ".jpg", ".jpeg", ".bmp", ".png" extension',
    FILE_SIZE = 'Image must have size < 5mb'
}

export const addBookValidation = ({
    title,
    author,
    year,
    price,
    description,
    image
}: BookPostDto): ErrorMessage | null  => {
    const emptyField = [title, author, year, price, description].some(el => el === '')
    if (emptyField) {
        return ErrorMessage.EMPTY_FIELD
    }

    if (!image) {
        return ErrorMessage.NO_IMAGE
    }

    if (!extensionCheck(image.name)) {
        return ErrorMessage.FILE_EXTENSION
    }

    return null
}

function extensionCheck(fileName: string): boolean {
    const arr = fileName.split('.')
    const ext = arr[arr.length - 1]
    return (ext === 'jpg' || ext === 'jpeg' || ext === 'bmp' || ext === 'png')
}