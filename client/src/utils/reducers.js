export const initialState = {
    currentUser: null,
    blogs: [],
    comments: [],
    products: [],
  };
  
export const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return {
          ...state,
          currentUser: action.currentUser,
        };
  
      case 'SET_BLOGS':
        return {
          ...state,
          blogs: action.blogs,
        };
  
      case 'SET_COMMENTS':
        return {
          ...state,
          comments: action.comments,
        };
  
      case 'SET_PRODUCTS':
        return {
          ...state,
          products: action.products,
        };
  
      default:
        return state;
    }
  };
  