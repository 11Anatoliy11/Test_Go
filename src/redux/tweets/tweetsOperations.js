import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://640100c50a2a1afebee4a30c.mockapi.io';

export const getTweets = createAsyncThunk(
  'tweets/getTweetsByQuery',
  async ({ page = 1, pageSize = 3 }, thunkAPI) => {
    try {
      const curentUserId = localStorage.getItem(`curentUserId`);
      const folows =
        (await axios.get(`myFolows?userId=${curentUserId}`))?.data || [];
      const totalCount = (await axios.get('users'))?.data?.length;
      const response =
        (await axios.get(`users?page=${page}&limit=${page * pageSize}`))
          ?.data || [];

      return {
        tweets: response,
        totalCount: totalCount,
        folows: folows,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getFollowingTweets = createAsyncThunk(
  'tweets/getFollowingTweets',
  async ({ page = 1, pageSize = 3 }, thunkAPI) => {
    try {
      const curentUserId = localStorage.getItem(`curentUserId`);
      const folows = (await axios.get(`myFolows?userId=${curentUserId}`))?.data;
      const users = (await axios.get('users'))?.data;
      const result = users.filter(it =>
        folows.some(el => el.followerId === it.id)
      );
      const totalCount = result?.length;
      let endIndex = page * pageSize;
      endIndex = endIndex > totalCount ? totalCount : endIndex;
      const response = result.splice(0, endIndex);

      return {
        tweets: response,
        totalCount: totalCount,
        folows: folows,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getNotFollowingTweets = createAsyncThunk(
  'tweets/getNotFollowingTweets',
  async ({ page = 1, pageSize = 3 }, thunkAPI) => {
    try {
      const curentUserId = localStorage.getItem(`curentUserId`);
      const folows = (await axios.get(`myFolows?userId=${curentUserId}`))?.data;
      const users = (await axios.get('users'))?.data;
      const result = users.filter(
        it => !folows.some(el => el.followerId === it.id)
      );
      const totalCount = result?.length;
      let endIndex = page * pageSize;
      endIndex = endIndex > totalCount ? totalCount : endIndex;
      const response = result.splice(0, endIndex);

      return {
        tweets: response,
        totalCount: totalCount,
        folows: folows,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const followTweet = createAsyncThunk(
  'tweets/followTweet',
  async ({ userId, followersCount }, thunkAPI) => {
    try {
      const curentUserId = localStorage.getItem(`curentUserId`);
      const followData = (await axios.post(`myFolows`, {
        userId: curentUserId,
        followerId: userId,
      })).data;
      await axios.put(`users/${userId}`, {
        followers: followersCount,
      });
      return {
        userId: userId,
        followId: followData.id,
        followersCount: followersCount,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const unfollowTweet = createAsyncThunk(
  'tweets/unfollowTweet',
  async ({ followId, userId, followersCount }, thunkAPI) => {
    try {
      await axios.put(`users/${userId}`, {
        followers: followersCount,
      });
      await axios.delete(`myFolows/${followId}`);
      return {
        userId: userId,
        followId: followId,
        followersCount: followersCount,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);