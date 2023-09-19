export const selectTweets = state => state.tweets.items;
export const selectTweetsCount = state => state.tweets.totalCount;
export const selectIsLoading = state => state.tweets.isLoading;
export const selectError = state => state.tweets.error;
export const selectQuery = () => localStorage.getItem("query");
export const selectFollows = state => state.tweets.follows;
