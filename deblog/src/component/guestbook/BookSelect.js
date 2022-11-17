import styled from "styled-components";

const StyledBookSelect = styled.select`
    margin-bottom:5px;

`

const BookSelect = () => {

    return (
        <StyledBookSelect name="type">
            <option>FeedBack</option>
            <option>QnA</option>
            <option>GuestBook</option>
        </StyledBookSelect>
    )
}

export default BookSelect