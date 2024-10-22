import Order from './Order'
function Footer(props) {

    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 23;
    const isOpen = hour >= openHour && hour <= closeHour ? true : false;

    return <footer className="footer">
        {isOpen ? <Order closeHour={closeHour} /> : (
            <p>
                We're happy to welcom you between {openHour}:00 and {closeHour}:00.
            </p>
        )}
    </footer >
}

export default Footer
