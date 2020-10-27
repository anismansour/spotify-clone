export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token: null,
  //remove after token with token
  //token:' token here for build without logout',
};

const reducer = (state, action) => {
  console.log(action.playlists);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
