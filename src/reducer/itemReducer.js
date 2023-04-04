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
    emmptyCart: (state,action) => {
      state.itemList = [];
      return state
    },
    updateQty: (state, action) => {
      let allItems = state.itemList
      allItems.map(item => {
        if(item.id === action.payload.prodId) {
          if(action.payload.action === "add"){
            item.qty = item.qty + 1
          }
          else{
             if(item.qty > 0){
              item.qty = item.qty - 1
             }
          } 
        }})
      state.itemList = allItems
      return state
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct, updateQty ,emmptyCart} = itemReducer.actions

export const selectItems = (state) => state.items.itemList

export default itemReducer.reducer