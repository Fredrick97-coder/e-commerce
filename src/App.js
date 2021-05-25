import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <a href='/'>
          <i class='fas fa-home'></i>Home
        </a>
        <a href='/'>Service</a>
        <a href='/'>Contact Us</a>
        <div className='left-link'>
          <a href='/'>Login</a>
          <a href='/'>Join Us</a>
        </div>
      </header>
      <div className='body-wrapper'>
        <h2>Hello! Welcome</h2>
        <h2>To My Blog</h2>
      </div>
    </div>
  )
}

export default App
