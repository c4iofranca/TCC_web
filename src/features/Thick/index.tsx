import styled from "styled-components";
import { colors } from "../../theme/colors";

interface IThick {
    label: string;
}

export default function Thick({label}: IThick) {
    return <Container>{label}</Container>
}

const Container = styled.div`
    position: absolute;
    top: 10px;
    border-left: 10px solid ${colors.BLUE_SYSTEM};
    padding-left: 10px;
    min-width: 4px;
`;