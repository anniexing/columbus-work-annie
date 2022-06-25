export const saveState = async (state) => {
  try {
    if(typeof localStorage !== 'undefined') {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    }
  }catch(e){
    console.log(e);
  }
}

export const loadState = () => {
  try {
    if(typeof localStorage !== 'undefined') {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    }
  } catch (err) {
    return undefined;
  }
};

