function Discount() {
    return (
        <div>
            <h2>
                Congrats, a 30% discount will be applied at checkout!
            </h2>
        </div>
    )
}

function OfferDiscount() {
    return (
        <div>
            <h2>
                Please log in to get a 30% discount!
            </h2>
        </div>
    )
}

function Promo(props) {
    let message
    if (props.loggedIn) {
        message = <Discount />
    } else {
        message = <OfferDiscount />
    }
    return (
        <div className='promo-section'>
            {message}
        </div>
    )
}

export { Promo }