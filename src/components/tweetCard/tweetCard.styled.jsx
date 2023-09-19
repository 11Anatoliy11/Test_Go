import styled from '@emotion/styled';

export const TweetCardsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;
  width: 380px;
  height: 460px;
  background: var(--background-card);
  box-shadow: -3px 7px 21px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  .logo {
    position: relative;
    top: 20px;
    left: -123px;
  }
  .picture {
    margin-top: 8px;
  }
  .rectangle {
    margin-top: 18px;
    width: 100%;
    height: 8px;
    background: var(--background-buttonCard);
  }
  .avatarCards {
    position: absolute;
    top: 185px;
  }
  .avatar {
    position: absolute;
    top: 8px;
    left: 12px;
    border-radius: 50%;
  }
`;

export const TweetCardsTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 62px 83px 36px;
  p {
    margin-bottom: 16px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: var(--background-buttonCard);
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 196px;
    height: 50px;
    border-radius: 10px;
    color: var(--button-text);
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 18px;
    font-weight: 600;
    &:hover {
      transform: scale(0.96);
    }
  }
`;
