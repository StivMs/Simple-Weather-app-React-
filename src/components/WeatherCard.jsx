import React from 'react'
import { Card } from 'react-bootstrap'
import WeatherIcon from "./Icon";
const WeatherCard = ({ dt, temp, feelsLike, main, icon }) => {
    const date = new Date(dt)
    return (
        <div>
            <Card style={cardStyle}>
                <WeatherIcon name={main} />

                <Card.Body className="text-center">
                    <h3>{main}</h3>
                    <p> {date.toLocaleDateString()} - {date.toLocaleTimeString()} </p>
                    <p>Temp: <b>{temp}°C</b></p>
                    <p>Feels like: <b>{feelsLike}°C</b></p>
                </Card.Body>
            </Card>
        </div>
    )
}

const cardStyle = {
    width: '12rem',
    marginTop: '2rem',
    backgroundColor: '#000000',
    borderRadius: '24px',
    borderStyle: 'solid',
    borderColor: '#51C8A6',
    color: '#FFFFFF'
}
export default WeatherCard