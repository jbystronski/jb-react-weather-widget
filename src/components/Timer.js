import React, { useState, useEffect } from 'react'
import TextSecondary from './TextSecondary'

export function padDate(num) {
  if (num !== null) {
    var str = num.toString()

    return str.length < 2 ? str.padStart(2, 0) : str
  }
}

export default function Timer({ color }) {
  const [seconds, setSeconds] = useState('00')
  const [hrs, setHrs] = useState('00')
  const [mins, setMins] = useState('00')

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date()

      const secs = date.getSeconds() + 1
      setHrs(date.getHours())
      setMins(date.getMinutes())

      setSeconds(secs)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <TextSecondary color={color}>
      {padDate(hrs)} : {padDate(mins)} : {padDate(seconds)}
    </TextSecondary>
  )
}
