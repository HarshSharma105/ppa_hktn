import { Link } from "react-router-dom";
import needAssistance from "../needAssistance";

const Content = () => {
    return (
        <>
        <h1>Child Rights</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dignissimos id adipisci corrupti pariatur expedita libero nemo perspiciatis ab optio, minima magnam cupiditate provident aut alias asperiores! Saepe, cupiditate aut?</p>
        <p>Click to know your rights and entitlement</p>
        <button>Get Started</button>
        <needAssistance/>
        {/* <Link to = "page1">Go to page 1</Link> */}
        </>
    )
}

export default Content;