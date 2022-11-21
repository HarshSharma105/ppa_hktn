import {Link, useNavigate} from "react-router-dom";
import SearchServiceBar from "./SearchServiceBar";

const Navigation = () => {
    const navigate = useNavigate();
    return (
        <>
        <span>Home</span>
        <span>Find the Service</span>
        <span>Disability Info</span>
        <span>Essential Docs</span>
        <span>Resources</span>
        <SearchServiceBar/>
        </>
    )
}

export default Navigation;