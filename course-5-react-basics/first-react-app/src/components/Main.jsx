import { WelcomeUser } from './WelcomeUser'

function Main(props) {
    return (
        <div className={'roundBorder mainContent'}>
            <WelcomeUser
                loggedIn={props.loggedIn}
                username={props.username} />
        </div>
    )
}

export { Main }