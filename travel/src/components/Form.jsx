import { useState } from "react";
function Form({ onAddItems }) {

    const [description, setDescripton] = useState("Test");
    const [quantity, setQuantity] = useState(5);

    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;
        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now()
        }

        //this function pass form parent component 
        onAddItems(newItem);
        console.log(newItem);

        setDescripton('');
        setQuantity(1);
    }
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😊 trip?</h3>
            <select name="quantity" value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
                {Array.from({ length: 20 }, (_, i) => i + 1)
                    .map(num =>
                        <option value={num} key={num}>
                            {num}
                        </option>)}
            </select>
            <input type="text" name="description" placeholder="Item..." value={description} onChange={e => setDescripton(e.target.value)} />
            <button>ADD</button>
        </form>);
}

export default Form
