import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #bdbdbd;
`;

export const ChartContainer = styled.div`
    padding: 10px;
`;

export const Chart = styled.div`
    margin-top: 10px;
    width: ${(props) => props.width}%;
    background-color: ${(props) => props.color};
    padding: 10px 0;
`;

export const ChartLabel = styled.div`
    white-space: nowrap;
    color: white;
    font-weight: bold;
    padding: 0 10px;
`;