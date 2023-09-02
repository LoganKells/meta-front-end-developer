/**
 * This component is used to apply highlighting styles
 * to any child component.
 * */
function Highlighter(props) {
    const highlightStyles = {
        background: 'yellow', padding: '10px',
        fontWeight: 'bold',
    }
    return (
        // props.children is generic for any child React component nested
        // in the parent Highlighter component.
        <div style={highlightStyles}>
            {props.children}
        </div>
    )
}