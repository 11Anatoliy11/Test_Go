import { BackgroundStyled, EntryBtn } from './tweetsPage.styled.jsx';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTweets, selectTweetsCount } from 'redux/tweets/selectors.js';
import TweetCard from 'components/tweetCard/tweetCard.jsx';
import TweetFilter from '../../components/tweetFilter/tweetFilter.jsx';
import {
    getTweets,
    getNotFollowingTweets,
    getFollowingTweets,
} from '../../redux/tweets/tweetsOperations';

const TweetsPage = () => {
    const tweetsTotalCount = useSelector(selectTweetsCount);
    const tweetsList = useSelector(selectTweets);
    const [page, setPage] = useState(2);
    const [pageSize] = useState(3);
    const [isEndOfList, setIsEndOfList] = useState(false);
    const lastCardRef = useRef(null);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState(null);

    useEffect(() => {
        setIsEndOfList(tweetsTotalCount === tweetsList.length);
        if (lastCardRef.current) {
            lastCardRef.current.scrollIntoView({
                behavior: 'smooth',
                top: lastCardRef.current.offsetTop,
            });
        }
    }, [tweetsList, tweetsTotalCount]);

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
        if (filter === 'show all') {
            dispatch(getTweets({ page: 1, pageSize: page * pageSize }));
        }
        if (filter === 'followings') {
            dispatch(getFollowingTweets({ page: 1, pageSize: page * pageSize }));
        }
        if (filter === 'follow') {
            dispatch(getNotFollowingTweets({ page: 1, pageSize: page * pageSize }));
        }
    };

    const handleFilters = arg => {
        setFilter(arg);
        setPage(2);
    };

    return (
        <BackgroundStyled>
            <Link to="/">
                <EntryBtn> Back </EntryBtn>
            </Link>
            <TweetFilter emitFilters={arg => handleFilters(arg)} />
            <div className="cards">
                {tweetsList.map(({ id, tweets, followers, avatar }, index) => {
                    if (index === tweetsList.length - 1) {
                        return (
                            <div key={1212} ref={lastCardRef}>
                                <TweetCard
                                    id={id}
                                    key={id}
                                    tweets={tweets}
                                    followers={followers}
                                    avatar={avatar}
                                />
                            </div>
                        );
                    }
                    return (
                        <TweetCard
                            key={id}
                            id={id}
                            tweets={tweets}
                            followers={followers}
                            avatar={avatar}
                        />
                    );
                })}
            </div>

            {!isEndOfList ? (
                <EntryBtn onClick={handleLoadMore}>Load More</EntryBtn>
            ) : (
                <p className="ending">Has no more cards</p>
            )}
        </BackgroundStyled>
    );
};

export default TweetsPage;
