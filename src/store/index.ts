import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';


// 使用configureStore创建store
const store: EnhancedStore = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production', // 根据环境启用Redux DevTools
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware() // 配置中间件
});

export default store;
