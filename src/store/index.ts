import { combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';
import { IPathDemoData, pathDemoReducer } from './path-demo.reducer';
import { ISearchState, searchReducer } from './search.reducer';

export class IAppState {
  counter?: number;
  pathDemo?: IPathDemoData;
  search?: ISearchState;
};

export const rootReducer = combineReducers<IAppState>({
  counter: counterReducer,
  pathDemo: pathDemoReducer,
  search: searchReducer
});

export const enhancers = [
  
];

