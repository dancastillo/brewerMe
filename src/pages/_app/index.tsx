import * as React from "react";

import App, { AppInitialProps, AppContext } from "next/app";
import { ThemeProvider } from "styled-components";

import { theme } from "@definitions/styled";
import { AppWithStore } from "@interfaces";
import { wrapper } from "@redux";

import "@static/css/main.scss";
import { Container } from "react-bootstrap";
import Navbar from "../../components/navbar";

class BrewerMeApp extends App<AppWithStore> {
    static async getInitialProps({
                                     Component,
                                     ctx,
                                 }: AppContext): Promise<AppInitialProps> {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <Navbar />
                <Container>
                    <Component {...pageProps} />
                </Container>
            </ThemeProvider>
        );
    }
}

export default wrapper.withRedux(BrewerMeApp);
