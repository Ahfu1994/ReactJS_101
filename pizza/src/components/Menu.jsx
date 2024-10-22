import Pizza from "./Pizza";

function Menu({ pizzaData }) {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;
    return <div className="menu">
        <h2>Our menu</h2>
        {numPizzas > 0 ? (
            <>
                <p>
                    Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious
                </p>
                <ul className='pizzas'>
                    {pizzaData.map((pizza) => {
                        return (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        );
                    })}
                </ul>
            </>
        ) : (<p>We're still working on our menu. Please come back later :</p>)}

    </div>
}
export default Menu
