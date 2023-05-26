

const initialState = {
    isThemeChanged: false,
  };
  
  const themeReducer = (state = initialState, action) => {
    console.log("teste");
    switch (action.type) {
      case 'TOGGLE_IMAGE_CLICK':
        return {
          ...state,
          isThemeChanged: !state.isThemeChanged,
        };
      default:
        return state;
    }
  };
  
  export default themeReducer;
  