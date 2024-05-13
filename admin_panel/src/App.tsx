import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Faq from "./scenes/faq";
import Bar from "./scenes/bar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* reset the css */}
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/invoices" element={<Invoices />}></Route>
              <Route path="/form" element={<Form />}></Route>
              <Route path="/bar" element={<Bar />}></Route>
              <Route path="/pie" element={<Dashboard />}></Route>
              <Route path="/line" element={<Dashboard />}></Route>
              <Route path="/faq" element={<Faq />}></Route>
              <Route path="/geography" element={<Dashboard />}></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
