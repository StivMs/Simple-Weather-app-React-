import React from 'react'
import WeatherCard from './WeatherCard'
import { Col, Row } from 'react-bootstrap'
const Forecast = ({ weathers }) => {
    return (
        <Row>
            {weathers.map(({ dt, main, weather }) => (
                <Col key={dt}>
                    <WeatherCard
                        temp={Math.floor(main.temp)}
                        dt={dt * 1000}
                        main={weather[0].main}
                        feelsLike={Math.floor(main.feels_like)}
                        icon={weather[0].icon}
                    />
                </Col>
            ))}
        </Row>
    )
}

export default Forecast
