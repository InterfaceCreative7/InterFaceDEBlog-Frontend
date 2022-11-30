import styled from "styled-components";

const StyledBookButton = styled.button`
height:5vw;

border:none;
background-color:transparent;
img{
  width:100%;
    height:100%;
    border-radius:50px;
    background-color:#083AA9;
    float:
    {
      background: rgb(0,172,238);
      background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
        width: 130px;
        height: 40px;
        line-height: 42px;
        padding: 0;
        border: none;
        
      }
      :before,after {
        position: absolute;
        content: "";
        right: 0;
        top: 0;
         background: rgba(2,126,251,1);
        transition: all 0.3s ease;
      }
      
      :before {
        height: 0%;
        width: 2px;
      }
      :after {
        width: 0%;
        height: 2px;
      }
      :hover{
         background: transparent;
        box-shadow: none;
      }
      :hover:before {
        height: 100%;
      }
      :hover:after {
        width: 100%;
      }
      span:hover{
         color: rgba(2,126,251,1);
      }
      span:before,after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
         background: rgba(2,126,251,1);
        transition: all 0.3s ease;
      }
      span:before {
        width: 2px;
        height: 0%;
      }
      span:after {
        width: 0%;
        height: 2px;
      }
      span:hover:before {
        height: 100%;
      }
      span:hover:after {
        width: 100%;
      }
}




img:hover{
    device-width:100%;
    height:100%;
    background-color:#002E94;
}

@media (max-width:500px){
    width:40vw;
    height:8vw;
    margin-right:1vw;
    padding:0.5vw;
    border-radius:10px;
    font-size:3vw;
    text-align: center;
}
`

const BookButton = () => {

  return (
    <StyledBookButton>
      <img src={process.env.PUBLIC_URL + "/image/homeButton.jpg"} alt="submit_button" />

    </StyledBookButton>
  )
}

export default BookButton;