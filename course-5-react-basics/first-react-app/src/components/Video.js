import ReactPlayer from 'react-player'

function Video(props) {
    return (
        <ReactPlayer
            url={props.url}
            controls={true}
            playing={false}
            volume={0.1}
        />
    )
}

export { Video }