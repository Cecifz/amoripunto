import React from "react";
import Item from "./Item";

function ItemList({ products }) {
    return (
        <div className = "flex justify-evenly gap-2 items-center flex-wrap">
            {products.map((product) => (
                <Item product={product} />
            ))}
        </div>
    );
}; 

export default ItemList;