import { LoginButton } from './LoginButton'
import { useState } from 'react'

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
    let message
    let displayValueBtn
    const loggedInBtnValue = 'Logout'
    const loggedOutBtnValue = 'Login'

    // Values based on login status
    props.loggedIn ? message = 'You are currently logged in' :
        message = 'Please login to view this page'
    props.loggedIn ? displayValueBtn = loggedInBtnValue : displayValueBtn = loggedOutBtnValue

    function internalClickHandler() {
        props.loggedInDispatch(!props.loggedIn)
        console.log('Login button clicked')
        console.log('loggedIn: ', props.loggedIn)
    }

    return (
        <div className={'roundBorder header'}>
            <h2>
                {message}
            </h2>
            <LoginButton status={props.loggedIn}
                         onClick={internalClickHandler}
                         displayValue={displayValueBtn}
            />

        </div>

    )

}

export { DisplayLogin }