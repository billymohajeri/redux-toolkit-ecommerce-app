import { PaginationProps } from '../features/products/productType';

const Pagination = ({ totalPages, currentPage, handleCurrentPageChange }: PaginationProps) => {
  return (
    <nav>
      <ul className="pagination justify-content-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
          >
            <button
              onClick={() => handleCurrentPageChange(index + 1)}
              className="page-link"
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
