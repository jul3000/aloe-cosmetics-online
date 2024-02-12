import { AccordionItem } from "./AccordionItem";
import { data } from "./data";
import "./index.css"

export const Accordion = () => {
    return (<div>
        {data.map ((item, index) =>
        <AccordionItem key={index} title={item.title} content={item.content}/>
        )}
    </div>)
}
