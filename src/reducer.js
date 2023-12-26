export let initialState = {
    windowSize:window.innerWidth,
    burger:false,
    learnMore:false,
    support:false,
    sales:false,
    driven:false,
    swap:false

    
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WINDOWSIZE':{
        return {...state,windowSize:action.payload}
    }
    case 'BURGER':{
      return {...state,burger:action.payload}
    }
    case 'LEARN_MORE':{
      return {...state,learnMore:action.payload}
    }
    case 'SUPPORT':{
      return {...state,support:action.payload}
    }
    case 'SALES':{
      return {...state,sales:action.payload}
    }
    case 'DRIVEN':{
      return {...state,driven:action.payload}
    }
    case 'SWAP':{
      return {...state,swap:action.payload}
    }
    default: {
       
      return state;
    }
  }
};
