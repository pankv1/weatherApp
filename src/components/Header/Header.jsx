import React from 'react'
import styles from './Header.module.css'


const Header = (props) =>{
  
  const [inputValue, setInputValue] = React.useState('')

  const handleInputChange = (event) =>{
    setInputValue(event.target.value)
  }
  return(
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="">weatherApp</a>
      </div>
      <form onSubmit={() =>{props.handleWeather(event,{inputValue})}}  className={styles.search}>
        <input type="text" placeholder="Search..." onChange={handleInputChange} />
      </form>
      <div className={styles.buttons}>
        <button className={styles.button}>Switch</button>
        <button className={styles.button}>Add to fav</button>
      </div>
    </header>
  )
}

export default Header;