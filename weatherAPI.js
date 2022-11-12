import fetch from 'node-fetch'
import { appendFile } from 'node:fs/promises'
import { normalize, resolve } from 'node:path'

const safeJoin = (base, target) => {
  const targetPath = '.' + normalize('/' + target)
  return resolve(base, targetPath)
}

const getDataFileName = (cityName) => safeJoin('./data/', `${cityName}.txt`)

const findTheWarmestCityInPoland = async (data) => {
  const sortedData = [...data].sort((a, b) =>
    Number(a.temperatura) < Number(b.temperatura) ? 1 : -1
  )

  const { stacja: station, temperatura: temperature } = sortedData[0]
  console.log(`The highest temperature is ${temperature}°C in ${station}.`)
}

const processWeatherData = async (data, cityName) => {
  const foundData = data.find((item) => item.stacja === cityName)

  if (!foundData) {
    throw new Error(`Not found ${cityName} city.  :-(`)
  }

  const {
    cisnienie: pressure,
    wilgotnosc_wzgledna: humidity,
    temperatura: temperature,
    data_pomiaru: date,
  } = foundData

  const weatherInfo = `In ${cityName} there is ${Number(
    temperature
  )}°C, ${Number(humidity)}% of humidity and pressure of ${Number(
    pressure
  )} pHa.`
  const time = new Date().toLocaleTimeString()

  await appendFile(
    getDataFileName(cityName),
    `${date} ${time}: ${weatherInfo}\n`
  )
}

;(async () => {
  try {
    const response = await fetch('https://danepubliczne.imgw.pl/api/data/synop')
    const data = await response.json()

    await processWeatherData(data, process.argv[2])
    findTheWarmestCityInPoland(data)
  } catch (error) {
    console.log('Error message:', error)
  }
})()
