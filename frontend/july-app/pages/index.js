import styles from '../styles/Home.module.css'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Reservation System
        </h1>

        <div>
          <div>
            <h2>Login</h2>
            <form action="/send-data-here" method="post">
              <label for="first">First name: </label>
              <br/>
              <input type="text" id="first" name="first" />
              <br/>
              <label for="last">Last name: </label>
              <br/>
              <input type="text" id="last" name="last" />
              <br/>
              <br/>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        
      </main>
      <Footer/>
    </div>
  )
}
