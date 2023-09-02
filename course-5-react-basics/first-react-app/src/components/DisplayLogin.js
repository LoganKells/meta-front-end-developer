import { LoginButton } from './LoginButton'

// function externalClickHandler() {
//     console.log('Login button clicked')
//     console.log('loggedIn: ')
// }

/**  Task

 1. Create a component called DisplayLogin. DisplayLogin should accept a prop called `status`.
 2. Using the ternary operator:
 If `status` is true, the DisplayLogin component should display: "You are currently logged in."
 If `status` is false, the component should display: "Please login in to view this page!"
 **/
function DisplayLogin(props) {
    let loggedIn = props.status
    console.log('loggedIn: ', loggedIn)
    let message
    loggedIn ? message = 'You are currently logged in' :
        message = 'Please login to view this page'

    let displayValueBtn
    loggedIn ? displayValueBtn = 'Logout' : displayValueBtn = 'Login'

    let internalClickHandler = () => {
        loggedIn = !loggedIn
        console.log('Login button clicked')
        console.log('loggedIn: ', loggedIn)
    }

    return (
        <div className={'roundBorder header'}>
            <h2>
                {message}
            </h2>
            <LoginButton status={loggedIn}
                         onClick={internalClickHandler}
                         displayValue={displayValueBtn}
            />

        </div>

    )

}

export { DisplayLogin }