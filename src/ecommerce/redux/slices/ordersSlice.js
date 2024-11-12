import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    //DATA
	ordersDataArr: [],
   
   //SELECCIONES
   //instituteDataObj: {},
    //BOOLEANS/VARIABLES
}
const ordersSlice = createSlice({
	name: 'ORDERS',
	initialState,
	reducers: {
		SET_DATA_ORDERS: (state, action) => { 			
                        console.log('<<REDUX-REDUCER>>:<<SET_DATA_ORDERS>>', action.payload);
			//state.institutesDataArr = action.payload.institutesDataArr;
			state.ordersDataArr = action.payload
		}
    }
}
);
export const {
	SET_DATA_ORDERS,
    //ADD_PRODUCT_SELECTED,
    //SWITCH_STATE,
} = ordersSlice.actions;
export default ordersSlice.reducer;