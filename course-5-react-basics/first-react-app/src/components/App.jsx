import '../styles/App.css'
import { Homepage } from './Homepage'
import { Promo } from './Promo'
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
    const [loggedIn, setLoggedIn] = useState(true)
    return (
        // Must use className in JSX, not class
        // which is already a Javascript keyword.
        <div className="App">
            <nav className="nav roundBorder">
                <Link to={'/'} className={'nav-item'}>
                    Homepage
                </Link>
                <Link to={'/promo'} className={'nav-item'}>
                    Promo
                </Link>
            </nav>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Homepage
                            loggedIn={loggedIn}
                            setLoggedIn={setLoggedIn}
                        />
                    }
                />
                <Route path="/promo" element={<Promo loggedIn={loggedIn} />} />
            </Routes>
        </div>
    )
}

export { App }
