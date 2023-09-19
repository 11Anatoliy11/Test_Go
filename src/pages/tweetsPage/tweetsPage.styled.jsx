import styled from '@emotion/styled';

export const BackgroundStyled = styled.div`
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  width: 1200px;
  justify-content: center;
  align-items: center;
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
  .filter {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 600;
  }
  .ending {    
    margin-top: 20px;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const EntryBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 196px;
  height: 50px;
  background: var(--background-button);
  border-radius: 10px;
  color: var(--button-text);
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
  &:hover {
    transform: scale(0.96);
  }
`;
