import screenReaderAccess from "./screenReaderAccess"
import contentSizeControl from "./contentSizeControl"
import Language from "./Language"

const Header = () => {
    return (
        <div className="bg-gray-200">
            <screenReaderAccess/>
            <contentSizeControl/>
            <Language/>
        </div>
    )
}
export default Header;