import logo from '../logo.svg'
import '../styles/App.css'
import { Heading } from './Heading'
import { Main } from './Main'
import { Nav } from './Nav'
import { Sidebar } from './Sidebar'
import { Promo } from './Promo'
import { DisplayLogin } from './DisplayLogin'

/**
 * This component is used to apply highlighting styles
 * to any child component.
 * */
function Highlighter(props) {
    const highlightStyles = {
        background: 'yellow', padding: '10px',
        fontWeight: 'bold',
    }
    return (
        // props.children is generic for any child React component nested
        // in the parent Highlighter component.
        <div style={highlightStyles}>
            {props.children}
        </div>
    )
}

function App() {
    return (
        // Must use className in JSX, not class
        // which is already a Javascript keyword.
        <div className='App'>
            <Heading title='This is a title'
                     color='purple' />
            <DisplayLogin id='displayLogin' status={false} />


            <div id='content'>
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
