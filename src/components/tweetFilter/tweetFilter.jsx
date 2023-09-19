import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getTweets,
  getNotFollowingTweets,
  getFollowingTweets,
} from '../../redux/tweets/tweetsOperations';
import { TweetFilterContainer } from './tweetFilter.styled';

const TweetFilter = ({ emitFilters }) => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('show all');

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    if (filter === 'show all') {
      dispatch(getTweets({}));
    }
    if (filter === 'followings') {
      dispatch(getFollowingTweets({}));
    }
    if (filter === 'follow') {
      dispatch(getNotFollowingTweets({}));
    }
    emitFilters(filter);
  }, [dispatch, filter]);

  return (
    <TweetFilterContainer>
      <label htmlFor="filterDropdown">Filter:</label>
      <select className='select' value={filter} onChange={handleFilterChange}>
        <option value="show all">Show All</option>
        <option value="follow">Follow</option>
        <option value="followings">Followings</option>
      </select>
    </TweetFilterContainer>
  );
};

export default TweetFilter;
