import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const id = newItem.card.info.id;

            const existingItem = state.items.find((item) => item.card.info.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const id = action.payload;

            const existingItem = state.items.find((item) => item.card.info.id === id);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.items = state.items.filter((item) => item.card.info.id !== id);
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;