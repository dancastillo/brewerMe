import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
`;
