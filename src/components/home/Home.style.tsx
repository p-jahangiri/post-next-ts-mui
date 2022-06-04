import styled from '@emotion/styled';

export const Container = styled.div`
    direction: rtl;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .img {
        width: 100%;
        height: 100px;
        object-fit: cover;
    }
    .text {
        height: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const Card = styled.div`
    display: flex;
`;
export const Loading = styled.div`
    margin-top: 200px;
    font-size: 30px;
`;

export const BoxCard = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
`;
export const BoxPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;
