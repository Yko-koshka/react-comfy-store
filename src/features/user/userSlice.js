import { createSlice } from '@reduxjs/toolkit';

const themes = {
  coffee: 'coffee',
  valentine: 'valentine',
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.coffee;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  user: { userName: 'coding addict' },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login');
    },
    logoutUser: (state) => {
      console.log('logout');
    },
    toggleTheme: (state) => {
      const { coffee, valentine } = themes;
      state.theme = state.theme === coffee ? valentine : coffee;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
