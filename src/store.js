import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './reducer/itemReducer'


export default configureStore({
  reducer: {
    items: itemReducer
  }
})