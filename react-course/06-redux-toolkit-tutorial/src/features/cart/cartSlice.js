import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { openModal } from "../modal/modalSlice";
// this import is used when we are not getting the cart items from the API
// import cartItems from "../../cartItems";

const url = "https://www.course-api.com/react-useReducer-cart-project";

//INFO: retrieving cart items using axios library
export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
//INFO: retrieving cart items using fetchAPI
// export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
//   return fetch(url)
//     .then((resp) => resp.json())
//     .catch((error) => console.log(error));
// });

const initialState = {
  cartItems: [],
  amount: 1,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      //or
      // return { ...state, cartItems: [] };
    },
    removeItem: (state, action) => {
      console.log(action);
      const itemID = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
    },
    increase: (state, action) => {
      const itemID = action.payload;
      const cartItem = state.cartItems.filter((item) => item.id === itemID);
      cartItem[0].amount = cartItem[0].amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.filter((item) => item.id === payload.id);
      console.log(cartItem);
      cartItem[0].amount = cartItem[0].amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

console.log(cartSlice.actions);
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

console.log(cartSlice);

export default cartSlice.reducer;
