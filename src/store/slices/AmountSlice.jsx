import { createSlice } from '@reduxjs/toolkit';



const amountSlices = createSlice({
    name:"amount",
    initialState:{
        amount : 1000
    },
    reducers:{
        addMoney(state, action) {
            if(state.amount < 1000 ){
                    
            state.amount += action.payload;
            }
        },
        removeMoney(state, action){
            state.amount -= action.payload;
            console.log(state.amount)
        },


    }
})


export default amountSlices.reducer;
export const {addMoney, removeMoney} = amountSlices.actions;