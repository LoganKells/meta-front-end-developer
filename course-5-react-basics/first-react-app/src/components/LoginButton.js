function LoginButton(props) {

    return (
        <div>
            <button className={'loginButton'}
                    type='button'
                    onClick={props.onClick}
            >
                {props.displayValue}
            </button>
        </div>
    )
}

export { LoginButton }
