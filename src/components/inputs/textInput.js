import styled from "styled-components";
import theme from "components/theme";

export const TextInput = styled.input`
    width: 320px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid gray;

    &:focus {
        border: 1px solid black;
    };
`