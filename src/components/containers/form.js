import theme from "components/theme";
import styled from "styled-components";

export const FormStyle = styled.section`
    display: flex;
    flex-direction: column;
    width: 50%;
    border-radius: 8px;
    border: 1px solid black;
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: ${theme.primaryColor};
    align-items: center;
    justify-content: center;
    gap: 8px;
`
