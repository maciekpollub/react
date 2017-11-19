import React from 'react';
import {Button} from 'react-bootstrap';
import {Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox} from 'react-bootstrap';//{kazdy wykorzystywany komponent rb musi zostać zaimportowany}


const Home = () => {
    const handleClick = () => {//def funkcji callback
        alert ('click');
    };
    return (
        <div>
            //przycisk wywołujący funkcję handleClick
            <Button bsStyle = "primary" bsSize = "small" onClick = {handleClick}>Button</Button>
            /*tworzenie kolumn w react-bootstrapie...*/
            <Grid>
                <Row className='show-grid'>
                    <Col xs={12} md={8}>Column no 1</Col>
                    <Col xs={12} md={4}>Column no 2</Col>
                </Row>
            </Grid>
            //teraz formularz...
            <form>
                <FormGroup>//pierwszy element formularza input//
                    <ControlLabel>
                        label
                    </ControlLabel>
                    <FormControl type="text" placeholder="Type your text"/>
                    <HelpBlock>
                        Help block
                    </HelpBlock>
                </FormGroup>

                <FormGroup>//kolejny element formularza: checkbox
                    <Checkbox inline>1</Checkbox>
                </FormGroup>

                <FormGroup>//lista rozwijalna..
                    <FormControl componentClass="select" placeholder="select">
                        <option value="select">option1</option>
                        <option value="other">option2</option>
                    </FormControl>
                </FormGroup>

            </form>
        </div>
    );

};
export default Home;