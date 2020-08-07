import React, { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";

const IndexPage: React.FC = (): ReactElement => {
    return (
        <>
            <Container className="container-fluid">
                <Row className="pt-5">
                    <Col className="offset-3 col-3">
                        <div>Hello world.</div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default IndexPage;
