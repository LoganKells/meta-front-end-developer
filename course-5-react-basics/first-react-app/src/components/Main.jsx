import { WelcomeUser } from './WelcomeUser'
import { Video } from './Video'

function Main(props) {
    return (
        <div className={'roundBorder mainContent'}>
            <WelcomeUser
                loggedIn={props.loggedIn}
                username={props.username} />

            <Video url={'https://youtu.be/i1CmOHfALTE'} />
        </div>
    )
}

export { Main }