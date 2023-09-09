import { Heading } from './Heading'
import { DisplayLogin } from './DisplayLogin'
import { Main } from './Main'
import { Sidebar } from './Sidebar'

function Homepage(props) {
    return (
        <div className={'Homepage'}>
            <Heading title='This is a title'
                     color='purple' />

            <DisplayLogin loggedIn={props.loggedIn}
                          loggedInDispatch={props.setLoggedIn} />

            <div className='content'>
                <Main greeting='Anna' />
                <Sidebar />
            </div>
        </div>
    )
}

export { Homepage }