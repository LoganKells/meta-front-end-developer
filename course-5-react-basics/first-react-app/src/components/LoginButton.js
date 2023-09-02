function clickHandler(loggedIn) {
    loggedIn = !loggedIn
}

function LoginButton(props) {
    let loggedIn = props.status
    let internalClickHandler = () => {
        loggedIn = !loggedIn
        console.log('Login button clicked')
        console.log('loggedIn: ', loggedIn)
    }
    return (
        <div>
            <button className={'loginButton'}
                    type='button'
                    onClick={internalClickHandler}
            >
                Login
            </button>
        </div>
    )
}

export { LoginButton }
