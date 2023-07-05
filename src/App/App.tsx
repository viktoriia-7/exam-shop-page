
import { StyledEngineProvider } from "@mui/material/styles";
import Main from "components/Main/Main";
import './App.scss'
const App = () => {
return (
    <StyledEngineProvider injectFirst>
      <Main />
    </StyledEngineProvider>
  );
};
export default App;