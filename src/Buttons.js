import { data } from './data';

function Buttons ({filteredProducts, setProducts}) {
    return (<div className="cont">
        <button className="change" onClick={() => setProducts(data)} >All</button>
        <button className="change" onClick={() => filteredProducts ("Body care")} >Body care</button>
        <button className="change" onClick={() => filteredProducts ("Face care")}>Face care</button>
        <button className="change" onClick={() => filteredProducts ("Teeth")}>Teeth</button>
        <button className="change" onClick={() => filteredProducts ("Hair")}>Hair</button>
        <button className="change" onClick={() => filteredProducts ("Sun care")}>Sun care</button>
        </div>
    ) 
}

export default Buttons;