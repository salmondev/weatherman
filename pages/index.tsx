import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Paper, Group, Text, TextInput, Button } from "@mantine/core";
import { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import PropTypes from "prop-types";

const API_KEY = "427c653c4c7a71b95feebc57f8d32bd5";

export default function Home() {
  const [value, setValue] = useState<string | null>(null);

  const [cityInput, setCityInput] = useState<City | null>(null);
  console.log({ cityInput });

  const [weatherData, setWeatherData] = useState<any>({});

  async function getWeatherData() {
    try {
      const serverResponse = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?" +
          "q=" +
          cityInput +
          "&appid=" +
          API_KEY +
          "&units=metric"
      );
      const data = await serverResponse.json();
      console.log(data);
      if (data?.cod === "400") throw data;
      setWeatherData(data);
    } catch (err) {
      console.log(err);
    }
  }

  const [capitalData, setData] = useState<any>([]);

  const capAPI = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/capital`);
      const capitalData = await res.json();
      console.log(capitalData);
      const result = Object.values(capitalData);
      setData(result);
    } catch (err) {
      console.log(error);
    }
  };

  type City = {
    name: string;
  };

  const citysOptions = capitalData.map((city) => city.name);

  useEffect(() => {
    setTimeout(() => {
      capAPI();
    }, 100);
  }, []);

  const dateBuilder = (timezone: number) => {
    const mL = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dL = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const date = new Date();
    var day = date.getDay();
    const dateN = date.getDate();
    var month = date.getMonth();
    const year = date.getFullYear();
    day = dL[day];
    month = mL[month];

    var hour = date.getUTCHours();
    var min = date.getMinutes();

    const timezoneUTC = timezone / 3600;

    hour = hour + timezoneUTC;
    if (hour >= 24) {
      hour = hour - 24;
    }
    hour = ("0" + hour).slice(-2);
    min = ("0" + min).slice(-2);
    const time = `${hour}:${min}`;

    const today = `${day}  ${dateN}  ${month}  ${year}`;
    const fullDate = today + " " + time;
    return fullDate;
  }

  return (
    <div
      style={{
        position: "static",
        height: "100vh",
        backgroundImage:
          "url('https://littlevisuals.co/images/atlantic_ridge.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Paper withBorder p="lg" style={{ maxWidth: "1000px" }}>
          {Object.keys(weatherData).length !== 0 ? (
            <>
              <Group position="left">
                <Text>
                  <b>Weather</b> {weatherData.name}
                  <br />
                  <b>Date and Time</b> {dateBuilder(weatherData.timezone)}
                  <br />
                  <b>Status</b> {weatherData.weather[0].description}
                </Text>
              </Group>
              <Group position="left">
                <Image
                  src={
                    "https://openweathermap.org/img/wn/" +
                    weatherData.weather[0].icon +
                    "@4x.png"
                  }
                  width="100"
                  height="100"
                  alt="icon"
                />
                <Text size="lg" weight={500}>
                  Currently {weatherData.main.temp} &deg;C
                </Text>
              </Group>
            </>
          ) : null}
          <Group position="apart">
            <Text size="xl" weight={500}>
              Get The Weather!
            </Text>
          </Group>
          <Group position="apart">
            <Text size="lg">Enter a city, and get the weather below!</Text>
          </Group>
          <Group position="apart" mb="xs">
            <Autocomplete
              options={citysOptions}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="City"
                  onChange={(e) => setCityInput(e.target.value)}
                />
              )}
              value={cityInput}
              sx={{ width: 300 }}
              onChange={(event: any, newValue: City | null) =>
                setCityInput(newValue)
              }
              freeSolo
            />
          </Group>
          <Group position="apart">
            <Button
              disabled={!cityInput}
              constiant="gradient"
              size="md"
              onClick={() => getWeatherData()}
            >
              Get Weather
            </Button>
          </Group>
        </Paper>
      </div>
    </div>
  );
}
