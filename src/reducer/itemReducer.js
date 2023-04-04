import { createSlice } from '@reduxjs/toolkit'

export const itemReducer = createSlice({
  name: 'items',
  initialState: {
    itemList: [],
  },
  reducers: {
    addProduct: (state,action) => {
      let val = action.payload;
      let allItems = state.itemList
      let present = false
      allItems.map(item => {
      if(item.id === val.id) {
          present = true
          item.qty = item.qty + 1
      }})
      if(present){
        state.itemList = allItems
      }
      if(!present){
        val.qty  = 1  
        state.itemList.push(val) 
      }
      return state
    },
    deleteProduct: (state) => {
      // let itemList = state.itemList
      // itemList.filter(item => item.)
    },
    updateQty: (state, action) => {
      state.itemList += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct, updateQty } = itemReducer.actions

export const selectItems = (state) => state.items.itemList

export default itemReducer.reducer