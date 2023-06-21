import { TweetCardsContainer, TweetCardsTitle } from './TweetCards.styled';
import logo from '../../images/logo.svg'
import picture from '../../images/picture.svg'
import boy from '../../images/boy.svg'

export const TweetCards = () => {
  return (
    <>
      <TweetCardsContainer>
        <img className='logo' src={logo} alt='logo' height={22} width={76} />
        <img className='picture' src={picture} alt='picture' height={168} width={308} />
        <img className='boy' src={boy} alt='boy' height={80} width={80} />
        <TweetCardsTitle>
          <p>TWEETS</p>
          <p>FOLLOWERS</p>
        </TweetCardsTitle>
        <button type='button'>FOLLOW</button>
      </TweetCardsContainer>
    </>
  )
}
