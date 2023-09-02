import { LoginButton } from './LoginButton'

/**  Task

 1. Create a component called DisplayLogin. DisplayLogin should accept a prop called `status`.
 2. Using the ternary operator:
 If `status` is true, the DisplayLogin component should display: "You are currently logged in."
 If `status` is false, the component should display: "Please login in to view this page!"
 **/
function DisplayLogin(props) {
    let loggedIn = props.status
    let message
    loggedIn ? message = 'You are currently logged in' :
        message = 'Please login to view this page'
    return (
        <div className={'roundBorder header'}>
            <h2>
                {message}
            </h2>
            <LoginButton status={loggedIn} />

        </div>

    )

}

export { DisplayLogin }