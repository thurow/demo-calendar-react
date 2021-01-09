import { createStore, Store } from 'redux'
import { rootReducer, RootState } from './modules/rootReducer'

export const store: Store<RootState> = createStore(rootReducer)
