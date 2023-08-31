function Main(props) {
    // let textStyle = {
    //     color: 'red',
    //     backgroundColor: 'lightblue',
    //     fontWeight: 'bold',
    // }
    return (
        <main className={'roundBorder mainContent'}>
            <h2>
                {props.greeting}, How are you?
            </h2>
        </main>
    )
}

export { Main }