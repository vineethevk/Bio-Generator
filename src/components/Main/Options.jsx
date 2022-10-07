import { useEffect, useState } from "react"
import "./Main.css"
export const Options = () => {
    const [input, setInput] = useState({ name: "Vineeth", gender: "male" });
    const [result, setResult] = useState("");
    const [locationcheck, setLocationCheck] = useState(false);
    const [schoolcheck, setSchoolCheck] = useState(false);
    const [occupationcheck, setOccupationCheck] = useState(false);
    const [religioncheck, setReligionCheck] = useState(false);



    const handleChange = (e) => {
        setInput((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleResult = () => {
        setResult(input.name);
    }
    useEffect(() => {
        handleResult();
        console.log(result);
    }, [input])



    return (
        <div className="left">
            <div className="heading">
                <h2>Options</h2>
            </div>
            <div>
                <label>Name </label>
                <input type={"text"} id="name" onChange={(e) => { handleChange(e) }} />
                <label> Gender </label>
                <select id="gender" onChange={(e) => { handleChange(e) }}>
                    <option value={"male"}>male</option>
                    <option value={"female"}>female</option>
                </select>
                <button>Random</button>
            </div>
            <div>
                <input type={"checkbox"} onChange={(e) => {
                    setLocationCheck(!locationcheck)
                }} />
                <label> Location </label>
                <input type={"text"} id="location" onChange={(e) => { handleChange(e) }} />
                <button>Random Location</button>
            </div>
            <div>
                <input type={"checkbox"} onChange={() => { setSchoolCheck(!schoolcheck) }} />
                <label> School </label>
                <input type={"text"} id="school" onChange={(e) => { handleChange(e) }} />
                <button>Random School</button><br /><br />
                <label> Major </label>
                <input type={"text"} id="major" onChange={(e) => { handleChange(e) }} />
                <button>Random Major</button>
            </div>
            <div>
                <input type={"checkbox"} onChange={() => { setOccupationCheck(!occupationcheck) }} />
                <label> Occupation </label>
                <input type={"text"} id="occupation" onChange={(e) => { handleChange(e) }} />
                <button>Random Occupation</button>
            </div>
            <div>
                <input type={"checkbox"} onChange={() => setReligionCheck(!religioncheck)} />
                <label> Religious background </label><br />
                <textarea rows={"4"} cols={"50"} id="religion" onChange={(e) => { handleChange(e) }}></textarea><br />
                <button>Random Religion</button>
            </div>
            <div>
                <input type={"checkbox"} />
                <label>Reason for meeting with missionaries </label><br />
                <textarea rows={"4"} cols={"50"} id="reason" onChange={(e) => { handleChange(e) }}></textarea><br />
                <button>Random Religion</button>
            </div>
        </div>
    )
}