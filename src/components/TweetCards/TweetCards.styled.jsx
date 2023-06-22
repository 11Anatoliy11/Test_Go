import styled from '@emotion/styled';

export const TweetCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -3px 7px 21px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  .logo {
    position: relative;
    top: 20px;
    left: -132px;
  }
  .picture {
    margin-top: 8px;
  }
  .rectangle {
    margin-top: 18px;
    width: 100%;
    height: 8px;
    background: #ebd8ff;
  }
  .boy {
    position: relative;
    top: -38px;
  }
`;

export const TweetCardsTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 16px;
    bottom: 24px;
    border-radius: 8px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #ebd8ff;
  }
  button {
    margin-top: 10px;
    width: 196px;
    height: 50px;
    background: #ebd8ff;
    border-radius: 10px;
    color: #373737;
    font-size: 18px;
    font-family: Montserrat;
    font-weight: 600;
    text-transform: uppercase;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
  }
`;
