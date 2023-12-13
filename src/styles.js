import styled from 'styled-components';

//conteúdo da página
export const Container = styled.div`

width: 100%;
height: 100vh;
background-color: #cacaca;
display: flex;
align-items: center;
justify-content: center;

`;
//conteúdo da calculadora
export const Content = styled.div`

margin:1px;
border: 10px solid blue;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;

width: 200px;

` ;

export const Row = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
alighn-items:center;
`
export const Column = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
alighn-items:center;`