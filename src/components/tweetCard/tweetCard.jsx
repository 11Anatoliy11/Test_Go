import { TweetCardsContainer, TweetCardsTitle } from './tweetCard.styled';
import logo from '../../images/logo.svg';
import picture from '../../images/picture.svg';
import circle from '../../images/circle.svg';
import boy from '../../images/boy.svg';
import { useSelector, useDispatch } from 'react-redux';
import { selectFollows } from '../../redux/tweets/selectors';
import {
  unfollowTweet,
  followTweet,
} from '../../redux/tweets/tweetsOperations';

const TweetCard = ({ id, tweets, followers, avatar }) => {
  const dispatch = useDispatch();
  const follows = useSelector(selectFollows);
  let foollowData = null;

  const isFollowing = () => {
    const res = follows.find(it => it.followerId === id);
    foollowData = res;
    return !!res;
  };

  const handleUnfollow = () => {
    dispatch(unfollowTweet({ followId: foollowData.id, userId: id, followersCount: followers - 1 }));
  };

  const handleFollow = () => {
    dispatch(followTweet({ userId: id, followersCount: followers + 1 }));
  };

  return (
    <TweetCardsContainer>
      <img className="logo" src={logo} alt="" height={22} width={76} />
      <img className="picture" src={picture} alt="" height={168} width={308} />
      <p className="rectangle"></p>
      <div className="avatarCards">
        <img
          className="circle"
          src={circle}
          alt="circle"
          height={80}
          width={80}
        />
        {avatar ? (
          <img className="avatar" src={avatar} alt="" height={56} width={56} />
        ) : (
          <img className="avatar" src={boy} alt="" height={60} width={60} />
        )}
      </div>
      <TweetCardsTitle>
        <p>{tweets} TWEETS</p>
        <p>
          {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} FOLLOWERS
        </p>
        {isFollowing() ? (
          <button
            type="button"
            id="Button"
            onClick={handleUnfollow}
            style={{ backgroundColor: 'var(--background-buttonCardActive)' }}
          >
            FOLLOWING
          </button>
        ) : (
          <button
            type="button"
            id="Button"
            onClick={handleFollow}
            style={{ backgroundColor: 'var(--background-buttonCard)' }}
          >
            FOLLOW
          </button>
        )}
      </TweetCardsTitle>
    </TweetCardsContainer>
  );
};

export default TweetCard;
