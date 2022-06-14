import { Home } from "./pages/Home/Home";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
