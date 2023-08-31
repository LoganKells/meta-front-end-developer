// Functional React component

function Heading(props) {
    // let title = "This is some heading text";
    let title = props.title // dynamic w/ props

    // This return is a JSX element.
    return (
        <header className={'roundBorder header'}>
            <h2>
                {title}, {props.color}
            </h2>
        </header>
    )
}

export { Heading }
