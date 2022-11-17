import styled from "styled-components";

const StyledBookSelect = styled.select`


`

const BookSelect = () => {

    return (
        <StyledBookSelect name="type">
            <option>피드백</option>
            <option>질문</option>
            <option>방명록</option>
        </StyledBookSelect>
    )
}

export default BookSelect