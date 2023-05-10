import React, { useState, useEffect } from "react"
import "./DebitCard.css"
import cards from "../../cards.json"
export const DebitCard = () => {

	const [allCards, setAllCards] = useState([])
	const [cardSelected, setCardSelected] = useState(null)
	const [dataVisible, setDataVisible] = useState(false)

	useEffect(() => {
		setAllCards(cards)
	}, [cards])

	const handleClickCard = (i) => {
		setCardSelected(allCards[i]);
	}

	const handleClickCardDetail = () => {
		setDataVisible(!dataVisible)
	}

	return (
		<div className="mt-50 layout-column justify-content-center align-items-center" >
			<div className="card outlined" style={{ width: '1000px' }}>
					{cardSelected && (
						<div data-testid="debit-card" onClick={handleClickCardDetail}>
							<h3 style={{ textAlign: 'center' }}>Card Details</h3>
							<br />
								{/*
									Display Card Details here
								*/}
							<div className="debit-card-body" data-testid="debit-card-body">
								<p className="debit-card-bank" data-testid="debit-card-bank-name">{cardSelected.bank}</p>
								<p className="debit-card-no" data-testid="debit-card-no">{ dataVisible ? String(cardSelected.number).replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4") : String(cardSelected.number).substring(0, 4) + ' XXXX XXXX XXXX'}</p>
								<br />
								<div style={{ height: '45px', backgroundColor: 'black' }} className="debit-card-stripe"></div>
								<p>
									<span className="debit-card-holder-name" data-testid="debit-card-holder-name">{dataVisible ? cardSelected.name : 'XXXX XXXX'}</span>
									<span className="debit-card-date" data-testid="debit-card-expiry-date">{dataVisible ? cardSelected.expiry : 'XX/XX'}</span>
									<span className="debit-card-cvv" data-testid="debit-card-cvv">{dataVisible ? cardSelected.cvv : 'XXX'}</span></p>
							</div>
						</div>
					)}
				<div>
					<h3 style={{ textAlign: "center" }}>Cards List</h3>
					<div className="debit-card-list" data-testid="debit-card-list">
                        {/*
                            Render the card list of all 6 cards imported from Cards.json here.
                        */}

						{allCards.map((card, i) => (
							<div key={`card-${i}`} className="list-card" data-testid={`list-card-${i}`} onClick={() => handleClickCard(i)}>
									<p className="list-card-title">Card {i + 1}</p>
								</div>
							)
						)}
					



					</div>
				</div>
			</div>
		</div>
	)
}