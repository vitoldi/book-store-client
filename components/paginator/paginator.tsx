import { NextPage } from "next"
import { Pagination } from "react-bootstrap"
import classes from "./paginator.module.scss"

interface Props {
    limit: number
    offset: number
    total: number
    onChangeOffset:  (v: number) => void
}

export const Paginator: NextPage<Props> = ({limit, offset, total, onChangeOffset}) => {
    const currentPage = offset / limit + 1
    const pagesAmount = Math.ceil(total / limit)
    const pages = Array.from(Array(pagesAmount).keys())
    const pagesProperties = createPagesProperties(pages, currentPage)

    return (
        <div className={classes.paginator}>
            <Pagination >
                <Pagination.First onClick={() => onChangeOffset(0)} disabled={currentPage === 1} />
                <Pagination.Prev onClick={() => onChangeOffset(offset - limit)} disabled={currentPage === 1} />
                {
                    pagesProperties.map((page, i) => {
                        return (
                            <div key={`${page}-${i}`}>
                                {page.ellipsis
                                ? <Pagination.Ellipsis disabled={true}/>
                                : <Pagination.Item 
                                    onClick={() => onChangeOffset((page.value - 1) * limit)} 
                                    active={page.active}>
                                        {page.value}
                                    </Pagination.Item>
                                }
                            </div>)
                    })
                }
                <Pagination.Next onClick={() => onChangeOffset(offset + limit)} disabled={currentPage === pagesAmount}/>
                <Pagination.Last onClick={() => onChangeOffset((pagesAmount - 1) * limit)} disabled={currentPage === pagesAmount}/>
            </Pagination>
        </div>
        
    )
}

interface PageValues {
    value: number,
    active: boolean,
    ellipsis: boolean 
}

function createPagesProperties(pages: number[], currentPage: number): Array<PageValues> {
    const pagesProperties: Array<PageValues> = pages.reduce((result, number) => {
        const value = number + 1
        if (value === currentPage) {
            return [...result, {value, active: true, ellipsis: false}]
        } else if (Math.abs(value - currentPage) < 2) {
            return [...result, {value, active: false, ellipsis: false}]
        } else if (value - currentPage === 2 || currentPage - value === 2) {
            return [...result, {value, active: false, ellipsis: true}]
        }

        return [...result]
    }, [] as Array<PageValues>)
    
    return pagesProperties
}