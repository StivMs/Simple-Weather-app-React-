import { Component } from 'react'
import { Row, Col, FormControl, Button } from 'react-bootstrap';


export class CitySearch extends Component {
    state = {
        city: ''
    }

    onSearch = (e) => {
        this.props.searchWeather(this.state.city)
    }

    render() {
        return (
            <>
                <Row>
                    <Col>
                        <h1 className="gradient-text">Search your city</h1>
                    </Col>
                </Row>

                <Row>
                    {/* xs={4} takes the one third  of the page*/}
                    <Col xs={4} className="text-center">
                        <FormControl className="form-horizontal"
                            placeholder="Enter city"
                            // update city value with the user's input
                            onChange={(event) =>
                                this.setState({ city: event.target.value })}
                            // value will be the currently selected city
                            value={this.state.city}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="btn btn-default"
                            onClick={this.onSearch}>Check Weather</Button>
                    </Col>
                </Row>
            </>
        )
    }
}

export default CitySearch
