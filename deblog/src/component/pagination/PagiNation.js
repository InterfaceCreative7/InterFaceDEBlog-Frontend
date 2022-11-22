import styled from "styled-components";
import ReactPagiNation from "react-js-pagination";

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

const PagiNation = (props) => {

    return (
        <StyledPagiNation>
            <ReactPagiNation
                activePage={props.page}//현재 페이지
                itemsCountPerPage={props.postPerPage}//한 페이지 당 보여줄 리스트 아이템 개수
                totalItemsCount={props.count}//총 아이템의 개수
                pageRangeDisplayed={7}//Paginator 내에서 보여줄 페이지의 범위
                prevPageText={"<"}
                nextPageText={">"}
                onChange={(page) => props.onChange(page)}
            />
        </StyledPagiNation>
    )
}

export default PagiNation