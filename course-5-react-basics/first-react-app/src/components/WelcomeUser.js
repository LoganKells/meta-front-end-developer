function WelcomeUser(props) {

    return (
        <h3>
            {props.loggedIn &&
                `It's going to be a great day ${props.username}! How are you?`}
        </h3>
    )


}

export { WelcomeUser }