import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    theme: "",
    gridType: localStorage.getItem("gridType") || false,
    selectedTodo: null,
    completedTodos: [],
    importantTodos: [],
};

export const todoReducer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload,
                checked: false,
                important: false,
            };
            state.todos.unshift(todo);
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.checked = !todo.checked;
                localStorage.setItem("todos", JSON.stringify(state.todos));
            }
        },
        changeTheme: (state, action) => {
            state.theme = action.payload;
        },
        changeGridType: (state, action) => {
            state.gridType = action.payload;
            localStorage.setItem("gridType", action.payload);
        },
        toggleImportant: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.important = !todo.important;
                state.importantTodos = state.todos.filter((todo) => todo.important);
                localStorage.setItem("todos", JSON.stringify(state.todos));
            }
        },
        selectTodo: (state, action) => {
            state.selectedTodo = state.todos.find(todo => todo.id === action.payload) || null;
        },
    },
});

export const { toggleImportant, addTodo, removeTodo, toggleTodo, changeTheme, changeGridType, selectTodo } = todoReducer.actions;

export default todoReducer.reducer;
