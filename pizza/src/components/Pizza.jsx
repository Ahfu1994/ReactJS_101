function Pizza({ pizzaObj }) {
    console.log(pizzaObj);
    // if (pizzaObj.soldOut) return null;
    return (
        <li className={`pizza  ${pizzaObj.soldOut ? 'sold-out' : ''}`} >
            <img src={pizzaObj.photoName} alt="Pizza spinaci" />
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            {/* {
                pizzaObj.soldOut ? (<span>SOLD OUT</span>) : (<span>{pizzaObj.price}</span>)
            } */}
            <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
        </li>);
}

export default Pizza
