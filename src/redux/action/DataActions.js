export const GET_POST = "GET_POST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const getPosts = () => {
  return { type: GET_POST };
};

//Optional para 'payload' contains data
export const getPostsSuccess = (data) => ({
  type: GET_POSTS_SUCCESS,
  payload: data,
});

export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
});

export function fetchPosts() {
  return async (dispatch) => {
    dispatch(getPosts);
    try {
      const response = await fetch(
        "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=hMMStHwO9caK0Q3BvvPaDQLB5nTFbjVm"
      );
      const data = await response.json();
      dispatch(getPostsSuccess(data));
    } catch (error) {
      dispatch(getPostsFailure);
    }
  };
}
