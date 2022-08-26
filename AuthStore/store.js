
// Imports: Dependencies
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import Reducer from '../Reducer';
// Middleware: Redux Persist Config
const persistConfig = {
key: 'root',
storage: AsyncStorage,
whitelist: [
"Reducer"
],
blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, Reducer)
const store = createStore(
persistedReducer,
applyMiddleware(
createLogger(),
),
);
let persistor = persistStore(store);
export {
store,
persistor,
};

