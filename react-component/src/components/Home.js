import React from 'react';
import {Button} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';//kazdy wykorzystywany komponent rb musi zostać zaimportowany


const Home = () => {
    const handleClick = () => {//def funkcji callback
        alert ('click');
    };
    return (
        <div>
            /*przycisk wywołujący funkcję handleClick*/
            <Button bsStyle = "primary" bsSize = "small" onClick = {handleClick}>Button</Button>
            /*tworzenie kolumn w react-bootstrapie...*/
            <Grid>
                <Row className='show-grid'>
                    <Col xs={12} md={8}>Column no 1</Col>
                    <Col xs={12} md={4}>Column no 2</Col>
                </Row>
            </Grid>
        </div>
    );

};
export default Home;