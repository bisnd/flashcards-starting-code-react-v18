import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {topics: {}},
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {id, name, icon, quizIds: []}; // select the "topics" object inside the "topics" slice, and creates a new property with the id as key, and the object as value
        }
    },
    extraReducers: {
        'quizzes/addQuiz': (state, action) => { // In "extraReducers" because that state is updated in response to an action type ("addQuiz") defined elsewhere ("quizzesSlice")
            const { id, topicId } = action.payload;
            state.topics[topicId].quizIds.push(id);
        }
    }
});

// Selector
export const selectTopics = state => state.topics.topics; // The state has a "topics" property, which inside has a "topics" object: "state{topics{topics{...}}}"

// Export Action Creator
export const { addTopic } = topicsSlice.actions; // The extraReducer depends on the "addQuiz" action so the action creator is exported in the quizzesSlice.js file not here, and the associated case reducer is already exported in the slice reducer below
// Export the Slice Reducer
export default topicsSlice.reducer; 