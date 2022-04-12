export function getUnits(units) {
  const ob = {
    temp: 'C',
    speed: 'km/h'
  }

  switch (units) {
    case 'metric':
      ob.temp = 'C'
      ob.speed = 'km/h'
      break
    case 'imperial':
      ob.temp = 'F'
      ob.speed = 'mph'
      break
    default:
      ob.temp = 'K'
      ob.speed = 'km/h'
      break
  }
  return ob
}
