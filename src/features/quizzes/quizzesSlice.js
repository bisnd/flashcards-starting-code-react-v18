import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {quizzes: {}},
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
            state.quizzes[id] = {id, topicId, name, cardIds};
        }
    }
});

// Selector
export const selectQuizzes = state => state.quizzes.quizzes;

// Export Action Creator
export const { addQuiz } = quizzesSlice.actions;
// Export the Reducer
export default quizzesSlice.reducer;