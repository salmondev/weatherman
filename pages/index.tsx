import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Paper, Group, Text, TextInput, Button } from "@mantine/core";
import { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const API_KEY = "427c653c4c7a71b95feebc57f8d32bd5";

export default function Home() {
  const [value, setValue] = useState<string | null>(null);

  const [cityInput, setCityInput] = useState<City | null>(null);

  const [weatherData, setWeatherData] = useState<any>({});
  const [notFound, setNotFound] = useState<any>({});

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
      console.log("data: ", data);
      if (data?.cod === "400" || data?.cod === "404") throw data;
      setWeatherData(data);
    } catch (err) {
      setNotFound(err);
      console.log("err: ", err);
    }
  }

  const [capitalData, setData] = useState<any>([]);

  const router = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const address_url = origin + router.asPath;

  const capAPI = async () => {
    try {
      const res = await fetch(address_url + `/api/capital`);
      const capitalData = await res.json();
      console.log(capitalData);
      const result = Object.values(capitalData);
      setData(result);
    } catch (err) {
      console.log(err);
    }
  };

  type City = {
    name: string;
  };

  capitalData as { name: string };
  const citysOptions = capitalData.map((city: any) => city.name);

  useEffect(() => {
    setTimeout(() => {
      capAPI();
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const day = date.getDay();
    const dateN = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const day1: string = dL[day];
    const month1 = mL[month];

    var hour: any = date.getUTCHours();
    var min: any = date.getMinutes();

    const timezoneUTC = timezone / 3600;

    hour = hour + timezoneUTC;
    if (hour >= 24) {
      hour = hour - 24;
    }
    hour = ("0" + hour).slice(-2);
    min = ("0" + min).slice(-2);
    const time = `${hour}:${min}`;

    const today = `${day1}  ${dateN}  ${month1}  ${year}`;
    const fullDate = today + " " + time;
    return fullDate;
  };

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
                  {notFound.cod !== 404 ? (
                    <>
                      <b>Status</b> {weatherData.weather[0].description}
                    </>
                  ) : null}
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
                  onChange={(e: any) => setCityInput(e.target.value)}
                />
              )}
              value={cityInput}
              sx={{ width: 300 }}
              onChange={(event: any, newValue: any) => setCityInput(newValue)}
              freeSolo
            />
          </Group>
          <Group position="apart">
            <Button
              disabled={!cityInput}
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
              size="md"
              onClick={() => getWeatherData()}
            >
              Get Weather
            </Button>
            {notFound.cod == 404 ? (
              <>
                <Text
                  variant="gradient"
                  gradient={{ from: 'orange', to: 'red', deg: 45 }}
                  fw={500}
                >
                  City not found
                </Text>
              </>
            ) : null}
          </Group>
        </Paper>
      </div>
    </div>
  );
}
