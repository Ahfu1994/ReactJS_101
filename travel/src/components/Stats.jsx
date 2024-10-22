function Stats({ items }) {
    if (!items.length) return (<p className="stats">Start adding to your packing list 🚀🚀🚀</p>)
    const numItems = items.length;
    const numberPacked = items.filter((item) => item.packed).length;
    // const percentage = (numberPacked / numItems * 100).toFixed(2);
    const percentage = Math.round((numberPacked / numItems) * 100);
    return (<>
        <footer className="stats">
            You have {numItems} items on your list, and you already packed {numberPacked} ({percentage}%)
        </footer>
    </>)
}

export default Stats
