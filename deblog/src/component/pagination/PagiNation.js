import styled from "styled-components";
import ReactPagiNation from "react-js-pagination";
import { useState } from "react";

const StyledPagiNation = styled.div`
 .pagination {
    display: flex;
    justify-content: center;
}
  ul {
    list-style: none;
    padding: 0;
}
li{
    margin:10px;
}
`

const PagiNation = () => {
    const [page, setPage] = useState(1);
    const changePage = () => {
        setPage(page)
    }
    return (
        <StyledPagiNation>
            <ReactPagiNation
                activePage={page}
                itemsCountPerPage={6}
                totalItemsCount={450}
                pageRangeDisplayed={6}
                onChange={changePage}
            />
        </StyledPagiNation>
    )
}

export default PagiNation