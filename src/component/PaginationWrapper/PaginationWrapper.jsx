import Pagination from "../Paginaton/Pagination";

const PaginationWrapper = ({ top, bottom, children, ...paginationProps }) => {
    return (
        <>
            {top && <Pagination {...paginationProps} />}
            {children}
            {bottom && <Pagination {...paginationProps} />}
        </>
    );
};

export default PaginationWrapper;
