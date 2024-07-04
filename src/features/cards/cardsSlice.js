import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {cards: {}},
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            state.cards[id] = { id, front, back };
        }
    }
});

// Selector
export const selectCardById = (id) => (state) => state.cards.cards[id];

// Export Action Creator
export const { addCard } = cardsSlice.actions;
// Export the Reducer
export default cardsSlice.reducer;