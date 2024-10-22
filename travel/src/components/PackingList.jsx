import { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggleItem, clearList }) {

    const [sortBy, setSortBy] = useState("input");
    let sortedItems;
    if (sortBy === "input") {
        sortedItems = items;
    } else if (sortBy === "description") {
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortBy === "packed") {
        sortedItems = items.slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));
    }


    return (
        <div className="list">
            <ul >
                {items.length > 0 ?
                    sortedItems.map(item => <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />)
                    : ""}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={clearList}>Clear list</button>
            </div>
        </div>

    )
}

export default PackingList
