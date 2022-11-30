import styled from "styled-components";
import ReactPagiNation from "react-js-pagination";
//http://ianlunn.github.io/Hover/
const StyledPagiNation = styled.div
`
@-webkit-keyframes hvr-pulse-grow {
    to {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  @keyframes hvr-pulse-grow {
    to {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

.pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    border-style: solid;
    border-color: white;
    border-radius: 50px;
    box-shadow: 2px 2px 2px rgb(0 0 0 / 25%);
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 25px;
    height: 25px;
    border: 2px;
    border-width : 1px;
    border-style: solid;
    border-color: white;
    border-radius: 30px;
    margin: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-family: Gulim, "Times New Roman", Georgia, serif;
    font-family: 'Nanum Pen Script', cursive;
    font-family: 'Jua', sans-serif;

    font-weight: bold;

    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;

    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    overflow: hidden;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: color, background-color;
    transition-property: color, background-color;

    justify-content: center;
    align-items: center;
  }

  ul.pagination li.active:hover{
    background-color: skyblue;

  }

  ul.pagination li:first-child{
    border-radius: 50px;
  }

  ul.pagination li:last-child{
    border-radius: 50px;
  }

  ul.pagination li a {
    text-decoration: none;
    color: #2421A9;
    font-size: 1rem;
  }

  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li:hover a {
    color: white;
  }

  ul.pagination li:hover {
    background-color: #2421A9;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }


  ul.pagination li.active {
    background-color: #2421A9;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: white;
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
