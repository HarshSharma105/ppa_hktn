const findService = () => {
    return (
        <form>
            <p>Let use find relevant schemes and services for you!</p>
            <label>Date of Birth</label>
            <input type="date"/>
            <label>Annual family Income (Optional)</label>
            <select>
                <option selected="selected"></option>
                <option>0-20,000</option>
                <option>20,000-80,000</option>
            </select>
            <label>Any specific category of schemes and services, you are interested in? (Optional)</label>
            <select>
                <option>option1</option>
                <option>option2</option>
            </select>
            <label>Type of Disability?</label>
            <select>
                <option>option1</option>
                <option>option2</option>
            </select>
            <label>Disability Percentage% (Optional)</label>
            <input type="text" />
            <input type="submit">Search</input>
            <input type="reset">Reset</input>
        </form>
    )
}

export default findService;