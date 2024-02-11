function Products ({itemsForSale}) {
    return (<div className="products">
        {itemsForSale.map( element => {
            const {id, name, price, image} = element;
            return (<div key={id} className="product-card">
                <img className="product-picture" src={image} width="400px" height="400px" alt="aloe vera products"/>
                
                <div className="product-info">
                    <p>{name}</p>
                    <p> Click here to get more information about {name} </p>                   
                    <p>Price: {price} euro</p>
                </div>
            </div>
            )
            })}
    </div>)
}

export default Products;
