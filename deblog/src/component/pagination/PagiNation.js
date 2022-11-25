import styled from "styled-components";
import ReactPagiNation from "react-js-pagination";

const StyledPagiNation = styled.div
`
.pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    border-style: solid;
    border-color: blue;
    border-radius: 50px;
    box-shadow: 1px 1px 1px rgb(0 0 0 / 25%);
  }

  ul {
    list-style: none;
    padding: 0;
  }
  
  ul.pagination li {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px;
    border-width : 2px 3px;
    border-style: solid;
    border-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-family: Gulim, "Times New Roman", Georgia, serif;
    font-weight: bold;
  }

  ul.pagination li:first-child{
    border-radius: 80px 20px 20px 80px;
  }

  ul.pagination li:last-child{
    border-radius: 20px 80px 80px 20px;
  }

  ul.pagination li.active:hover{
    background-color: skyblue;
  }

  ul.pagination li:hover{
    background-color: gray;
  }

  ul.pagination li:hover a{
    color: white;
  }

  ul.pagination li a {
    text-decoration: none;
    color: #2421A9;
    font-size: 1rem;
  }
  
  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.hover {
    background-color: #2421A9;
  }

  ul.pagination li.active {
    background-color: #2421A9;
  }

  ul.pagination li a.active {
    color: red;
  }
  
  .page-selection {
    width: 48px;
    height: 30px;
    color: #2421A9;
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