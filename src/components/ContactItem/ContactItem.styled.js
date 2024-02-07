import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  margin: 0;
  gap: 20px;
  justify-content: space-between;
  width: 300px;
  align-items: center;
`;

export const ContactInform = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  align-items: center;
  svg {
    color: green;
    font-size: large;
  }
`;

export const ContactBtn = styled.button`
margin-top: 10px;
width: 100px;
padding: 0px;
height: 25px;
color: #black;
border: 1px solid #000000;
border-radius: 5px;
cursor: pointer;
transition: all 0.25s linear 0s;
&:hover,
&:focus {
  border: 1px solid #white; background: #ff0000;
  transform: scale(1.1);
`;

export const BtnWrapper = styled.div`
  :hover {
    background-color: #black;
    color: white;
    border: none;
  }
`;

export const Info = styled.p`
  font-weight: ${props => {
    switch (props.type) {
      case 'name':
        return 'bolder';
      case 'number':
        return 'bold';
      default:
        return 'bolder';
    }
  }};
`;
