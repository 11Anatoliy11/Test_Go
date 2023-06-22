import React, { useState, useEffect } from 'react';
import { TweetCardsContainer, TweetCardsTitle } from './TweetCards.styled';
import logo from '../../images/logo.svg';
import picture from '../../images/picture.svg';
import boy from '../../images/boy.svg';

export const TweetCards = () => {
  const initialButtonText = 'FOLLOW';
  const initialButtonColor = '#EBD8FF';
  const initialNumberOfFollowers = 100500;
  const initialIsHovered = 'none';

  const [buttonText, setButtonText] = useState(
    localStorage.getItem('buttonText') || initialButtonText
  );
  const [buttonColor, setButtonColor] = useState(
    localStorage.getItem('buttonColor') || initialButtonColor
  );
  const [numberOfFollowers, setNumberOfFollowers] = useState(
    parseInt(localStorage.getItem('numberOfFollowers')) ||
    initialNumberOfFollowers
  );
  const [isHovered, setIsHovered] = useState(
    localStorage.getItem('isHovered') || initialIsHovered
  );

  const changeButtonText = () => {
    if (buttonText === 'FOLLOW') {
      setButtonText('FOLLOWING');
      setButtonColor('#5CD3A8');
      setNumberOfFollowers(numberOfFollowers + 1);
      setIsHovered('scale(0.99)');
      return;
    }

    setButtonText('FOLLOW');
    setButtonColor('#EBD8FF');
    setNumberOfFollowers(numberOfFollowers - 1);
    setIsHovered('none');
  };

  useEffect(() => {
    localStorage.setItem('buttonText', buttonText);
    localStorage.setItem('buttonColor', buttonColor);
    localStorage.setItem('numberOfFollowers', numberOfFollowers.toString());
    localStorage.setItem('isHovered', isHovered);
  }, [buttonText, buttonColor, numberOfFollowers]);

  return (
    <>
      <TweetCardsContainer>
        <img className="logo" src={logo} alt="logo" height={22} width={76} />
        <img
          className="picture"
          src={picture}
          alt="picture"
          height={168}
          width={308}
        />
        <p className="rectangle "></p>
        <img className="boy" src={boy} alt="boy" height={80} width={80} />
        <TweetCardsTitle>
          <p>777 TWEETS</p>
          <p>
            {numberOfFollowers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
            FOLLOWERS
          </p>
          <button
            type="button"
            id="Button"
            onClick={changeButtonText}
            style={{ backgroundColor: buttonColor, transform: isHovered }}
          >
            {buttonText}
          </button>
        </TweetCardsTitle>
      </TweetCardsContainer>
    </>
  );
};
