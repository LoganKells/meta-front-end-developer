import { Discount } from './Discount'
import { OfferDiscount } from './OfferDiscount'

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