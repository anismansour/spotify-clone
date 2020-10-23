export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token: null,
  //remove after token with token
  //token:
  // 'BQBc7aRIrNo0cWJCVGuur0KByvg_jzR04ZdEaMHqFcRXcLHblz7P_N8TybBTZYKavcyL2kPeDr9fK7qjfW6oEAv0zmcHcdyn5M692n18IEsvwhGWnwwrpZr_pEIsjOO24M84RNCEXtT21r04ybqgVMrhZ1Qss3Rc',
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

    default:
      return state;
  }
};

export default reducer;
