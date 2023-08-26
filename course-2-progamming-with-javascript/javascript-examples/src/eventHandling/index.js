import { handleHeadingClick } from './listeners'

function index() {
    return (
        <h1 onClick={handleHeadingClick}>Example Domain</h1>
    )
}