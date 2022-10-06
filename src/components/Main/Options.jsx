import "./Main.css"
export const Options = () => {
    return (
        <div className="left">
            <div className="heading">
                <h2>Options</h2>
            </div>
            <div>
                <label>Name </label>
                <input type={"text"} />
                <label> Gender </label>
                <select>
                    <option>male</option>
                    <option>female</option>
                </select>
                <button>Random</button>
            </div>
            <div>
                <input type={"checkbox"} />
                <label> Location </label>
                <input type={"text"} />
                <button>Random Location</button>
            </div>
            <div>
                <input type={"checkbox"} />
                <label> School </label>
                <input type={"text"} />
                <button>Random School</button><br /><br />
                <label> Major </label>
                <input type={"text"} />
                <button>Random Major</button>
            </div>
            <div>
                <input type={"checkbox"} />
                <label> Occupation </label>
                <input type={"text"} />
                <button>Random Occupation</button>
            </div>
            <div>
                <input type={"checkbox"} />
                <label> Religious background </label><br />
                <textarea rows={"4"} cols={"50"}></textarea><br />
                <button>Random Religion</button>
            </div>
            <div>
                <input type={"checkbox"} />
                <label>Reason for meeting with missionaries </label><br />
                <textarea rows={"4"} cols={"50"}></textarea><br />
                <button>Random Religion</button>
            </div>
        </div>
    )
}