import '../styles/App.css'
import { Heading } from './Heading'
import { Main } from './Main'
import { Sidebar } from './Sidebar'
import { DisplayLogin } from './DisplayLogin'
import { useState } from 'react'

function App() {
    let [loggedIn, setLoggedIn] = useState(true)
    return (
        // Must use className in JSX, not class
        // which is already a Javascript keyword.
        <div className='App'>
            <Heading title='This is a title'
                     color='purple' />
            <DisplayLogin status={loggedIn} dispatch={setLoggedIn} />

            <div className='content'>
                <Main greeting='Anna' />
                <Sidebar />
            </div>
        </div>
    )

    // default create-react-app:
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
}

export default App
