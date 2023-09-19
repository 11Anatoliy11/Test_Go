import styled from '@emotion/styled';

export const BackgroundStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-position: center;
`;

export const TitleStyled = styled.h1`
  font-family: 'Poppins';
  margin-bottom: 14px;
  margin-top: 44px;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
`;

export const EntryBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 196px;
  height: 50px;
  background: silver;
  border-radius: 10px;
  color: #373737;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  text-transform: uppercase;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
  &:hover {
    transform: scale(0.96);
  }
`;
