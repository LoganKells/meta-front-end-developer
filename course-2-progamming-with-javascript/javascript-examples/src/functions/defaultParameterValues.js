function confirmPurchase(name = 'guest user', purchaseCount = 1) {
    console.log(
        'Thank you for your order, ' +
            name +
            '. You have made ' +
            purchaseCount +
            ' purchases from us.'
    )
}

confirmPurchase('Tom', 7)
confirmPurchase('Logan')
confirmPurchase()
