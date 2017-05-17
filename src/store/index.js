import {createStore, applyMiddleware, compose} from 'redux'
import reducer from '../reducer'
import thunk from 'redux-thunk';

const enhancer = compose(applyMiddleware(thunk));

const store = createStore(reducer, {}, enhancer);

const unsubscribe= store.subscribe(() => {
  const state=store.getState();
  console.log('state',state, state.recipes.get('recipes'));
    const recipesStringView = JSON.stringify(state.recipes.get('recipes'));
    localStorage.setItem('recipes', recipesStringView);
  }
)
window.store = store;
export default store