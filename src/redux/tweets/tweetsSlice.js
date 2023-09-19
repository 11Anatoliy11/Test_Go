import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getTweets,
  getFollowingTweets,
  getNotFollowingTweets,
  unfollowTweet,
  followTweet,
} from './tweetsOperations';
import { toast } from 'react-toastify';

const initialState = {
  items: [],
  totalCount: 0,
  follows: [],
  isLoading: false,
  error: null,
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.tweets;
        state.totalCount = action.payload.totalCount;
        state.follows = action.payload.folows.map(it => ({ id: it.id, followerId: it.followerId }));
      })
      .addCase(getFollowingTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.tweets;
        state.totalCount = action.payload.totalCount;
        state.follows = action.payload.folows.map(it => ({ id: it.id, followerId: it.followerId }));
      })
      .addCase(getNotFollowingTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.tweets;
        state.totalCount = action.payload.totalCount;
        state.follows = action.payload.folows.map(it => ({ id: it.id, followerId: it.followerId }));
      })
      .addCase(followTweet.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items = state.items.map(it => {
          if (it.id === payload.userId) {
            it.followers = payload.followersCount;
          }
          return it;
        });

        state.follows.push({ id: payload.followId, followerId: payload.userId });
      })
      .addCase(unfollowTweet.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items = state.items.map(it => {
          if (it.id === payload.userId) {
            it.followers = payload.followersCount;
          }
          return it;
        });
        state.follows = state.follows.filter(it => it.id !== payload.followId);
      })
      .addCase(getTweets.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFollowingTweets.pending, state => {
        state.isLoading = true;
      })
      .addCase(getNotFollowingTweets.pending, state => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(
          getTweets.rejected,
          getFollowingTweets.rejected,
          getNotFollowingTweets.rejected,
          followTweet.rejected,
          unfollowTweet.rejected
        ),
        (state, action) => {
          state.error = action.payload?.message;
          state.isLoading = false;
          toast.error('Something went wrong, please try again later', {
            autoClose: 3000,
          });
        }
      );
  },
});

export const tweetsReducer = tweetsSlice.reducer;
