import React from "react";
import Helmet from 'react-helmet';
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components"; 
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from "../Styles/Theme"; 
import Routes from "./Routes";

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <React.Fragment>
                <Helmet
                    htmlAttributes={{ lang: 'ko' }}
                    meta={[{ charset: 'UTF-8' }]}
                    link={[{
                    rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
                    }, {
                    rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
                    }]}
                />
                <GlobalStyles />
                <Router>
                    <Routes />
                </Router>
            </React.Fragment>
        </ThemeProvider>
    );
};

export default App;
