import styles from './WeatherInfo.module.css'



const date = new Date();
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const WeatherInfo = (props) =>{


  const kelvinConvert = (value) =>{
   return (value - 273.15).toFixed(0)
  }


  return(
    <section className={styles.weatherInfo}>
      <div className={styles.weathertop}>
        <div className={styles.weathercontent}>
          <h1 className={styles.city}>{(props.temperature - 273.15).toFixed(1)}°</h1>
          <h1 className={styles.degree}>{props.infoCity}</h1>
        </div>
        <div>
          <img className={styles.img} src={`image/${props.icon}.svg`} alt="" />
        </div>
      </div>
      <div className={styles.weatherbottom}>
        <p>{kelvinConvert(props.maxTemp)}° / {kelvinConvert(props.minTemp)}° feels like {kelvinConvert(props.feels)}°</p>
        <p>
          {days[date.getDay()]}, {date.getHours()}:{date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes()}
        </p>
      </div>
    </section>
  )
}

export default WeatherInfo;