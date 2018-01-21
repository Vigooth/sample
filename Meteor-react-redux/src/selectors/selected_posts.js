//Take a list of posts and post Ids, and picks out
// the selected Posts
import { createSelector } from 'reselect';
import _ from 'lodash'
const postsSelector = state => state.posts;
const selectedPostsSelector = state => state.selectedPostIds;
const getPosts = (posts, selectedPostIds) => {
  const selectedPosts = _.filter(
    posts,
    post => _.contains(selectedPostIds, post.id)
  );
  return selectedPosts
};

export default createSelector(
  postsSelector, // pick off a pieace of state
  selectedPostsSelector, // pick off a piece of state
  getPosts // last argument is the function that has our select logic

)