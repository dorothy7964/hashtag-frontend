import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components"; 
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from "../Styles/Theme"; 
import Routes from "./Routes";

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <React.Fragment>
                <GlobalStyles />
                <Router>
                    <Routes />
                </Router>
            </React.Fragment>
        </ThemeProvider>
    );
};

export default App;
