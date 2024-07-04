import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {topics: {}},
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {id, name, icon, quizIds: []}; // select the "topics" object inside the "topics" slice, and creates a new property with the id as key, and the object as value

        }
    }
});

// Selector
export const selectTopics = state => state.topics.topics; // The state has a "topics" property, which inside has a "topics" object: "state{topics{topics{...}}}"

// Export Action creator
export const { addTopic } = topicsSlice.actions; 
// Export the Reducer
export default topicsSlice.reducer;