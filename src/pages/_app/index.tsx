import * as React from "react";

import App, { AppInitialProps, AppContext } from "next/app";
import { ThemeProvider } from "styled-components";

import { theme } from "@definitions/styled";
import { AppWithStore } from "@interfaces";
import { wrapper } from "@redux";

import "@static/css/main.scss";

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
                <Component {...pageProps} />
            </ThemeProvider>
        );
    }
}

export default wrapper.withRedux(BrewerMeApp);
