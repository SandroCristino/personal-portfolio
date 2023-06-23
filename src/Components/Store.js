import { configureStore } from '@reduxjs/toolkit'
import Filemanager  from './Filemanager.js';

const store = configureStore({
    reducer: {
      file: Filemanager,
    },
})

export default store
