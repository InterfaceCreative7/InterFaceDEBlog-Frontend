import styled from "styled-components";

const Styledtitle = styled.header`
display:flex;
justify-content:center;
font-weight:bold;
font-size:20px;
padding:5px;

{
    color: #333;
    text-decoration: none;
    display: inline-block;
    padding: 5px 0;
    position: relative;
  }

:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #ffb000;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

:hover:after { 
    width: 100%; 
    left: 0; 
  }
`

const Title = (props) => {
    const ABC = () =>{
        console.log("asdsad")
    }
    return (
        <Styledtitle>{props.value}</Styledtitle>
    )

}

export default Title
