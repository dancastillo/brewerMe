import React, { ReactElement } from "react";

import { Container } from "@styled";
import Navbar from "../components/navbar";
import Search from "../components/search";

const IndexPage: React.FC = (): ReactElement => {
    return (
        <>
            <Navbar />
            <Container>
                <Search />
            </Container>
        </>
    );
};

export default IndexPage;
