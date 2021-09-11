import { SalePage } from "types/sale"

interface PaginationProps {
    page: SalePage;
    onPageChange: Function;
}

const Pagination = ({ page, onPageChange }: PaginationProps) => {
    const {first, last, number} = page;

    return (
        <div className="row d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${first ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(number - 1)}>Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{number + 1}</span>
                    </li>
                    <li className={`page-item ${last ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(number + 1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
