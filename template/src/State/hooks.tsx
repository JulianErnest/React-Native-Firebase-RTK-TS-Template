import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import store from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const getStoreState = () => store.getState();
