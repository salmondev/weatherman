import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Paper, Group, Text, TextInput, Button } from '@mantine/core'
import { useState } from 'react'

const API_KEY = "427c653c4c7a71b95feebc57f8d32bd5";

export default function Home() {
  const [ cityInput, setCityInput ] = useState("");

  const [weatherData, setWeatherData] = useState<any>({}); { city: "bangkok" }

  async function getWeatherData(params:type) {
    console.log("Button pressed");
    try {
      const serverResponse = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?" +
        "q=" +
        cityInput +
        "&appid=" +
        API_KEY +
        "&units=metric"
      )
      const data = await serverResponse.json();
      console.log(data);
      if (data?.cod === "400") throw data;
      setWeatherData(data);
    } catch (err) {
      console.log(err);
    }
  }

  console.log(cityInput)
  return (
    <div
      style={{
        position: "static",
        height: "100vh",
        backgroundImage: "url('https://littlevisuals.co/images/atlantic_ridge.jpg')",
        backgroundSize: "cover"
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >

        <Paper withBorder p="lg" style={{maxWidth: "500px"}}>
          <Group position="apart">
            <Text size="xl" weight={500}>
              Get The Weather!
            </Text>
          </Group>
          <Group position="apart">
            <Text size="lg">
              Enter a city, and get the weather below!
            </Text>
          </Group>
          <Group position="apart" mb="xs">
            <TextInput
              label="City Name"
              placeholder="ex: Bangkok"
              onChange={(e) => setCityInput(e.target.value)}
            />
          </Group>
          <Group position="apart">
            <Button variant='gradient' size='md' onClick={() => getWeatherData()}>
              Get Weather
            </Button>
          </Group>
          {Object.keys(weatherData).length !== 0 ?
            <>
              <Group position="left">
                <Text>
                  {weatherData.name} Weather
                </Text>
              </Group>
              <Group position="left">
                <Image
                  src={"https://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@4x.png"}
                  width='100'
                  height='100'
                  alt='icon'
                />
                <Text size="lg" weight={500}>
                  Currently {weatherData.main.temp} &deg;C
                </Text>
              </Group>
            </>
            : null
          }
        </Paper>
      </div>
    </div>
  )
}
