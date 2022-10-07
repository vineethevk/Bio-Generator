// import { Options } from "./Options"
// import { Result } from "./Result"
import { useEffect, useState } from "react"
import "./Main.css";

export const Main = () => {
    const [input, setInput] = useState({ name: "Vineeth", gender: "male" });
    const [locationcheck, setLocationCheck] = useState(false);
    const [schoolcheck, setSchoolCheck] = useState(false);
    const [occupationcheck, setOccupationCheck] = useState(false);
    const [religioncheck, setReligionCheck] = useState(false);
    const [isReasonchecked, setReasonchecked] = useState(false);



    const handleChange = (e) => {
        setInput((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const RandomNameGenerator = () => {
        const names = ["Aayush", "Vikram", "Kranthi", "Swanand", "Nrupul"]
        setInput((prev) => { return { ...prev, name: names[Math.floor(Math.random() * 5)] } })
    }

    const RandomLocationGenerator = () => {
        const locations = ["Delhi", "Hyderabad", "Mumbai", "Kolkata", "Pune", "Chennai"]
        setInput((prev) => { return { ...prev, location: locations[Math.floor(Math.random() * 6)] } })
    }

    const RandomSchoolGenerator = () => {
        const schools = ["Telangana University", "Kakatiya University", "Vignana Jyothi Institute", "VREC", "CMR"];
        setInput((prev) => { return { ...prev, school: schools[Math.floor(Math.random() * 5)] } })
    }

    const RandomStreamGenerator = () => {
        const streams = ["Civil", "Computer Science", "EEE", "ECE", "B.Sc", "Bcom"]
        setInput((prev) => { return { ...prev, stream: streams[Math.floor(Math.random() * 6)] } })
    }

    const RandomOccupationGenerator = () => {
        const occupations = ["Web Developer", "Blockchain Developer", "Fullstack Developer", "Journalist", "Farmer"]
        setInput((prev) => ({ ...prev, occupation: occupations[Math.floor(Math.random() * 5)] }));
    }

    const RandomReligionGenerator = () => {
        const ReligionData = ["Christian, but stopped going to church when they left home for college", `never discussing religion in ${input.gender == "male" ? "his" : "her"} home`, "in a dysfunctional family that had little to no belief in God, or believed in a harsh deity", "non-religious, but has taken some world-religion classes in college", "Hinduism", "Jainism", `often worries that God is disappointed in ${input.gender == "male" ? "him" : "her"} for not following ${input.gender == "male" ? "him" : "her"} better and wants to know how to change.`]
        setInput((prev) => ({ ...prev, religion: ReligionData[Math.floor(Math.random() * 7)] }))
    }

    return (
        <div className="main">
            <div className="left">
                <div className="heading">
                    <h2>Options</h2>
                </div>
                <div>
                    <label>Name </label>
                    <input type={"text"} id="name" value={input.name} onChange={(e) => { handleChange(e) }} />
                    <label> Gender </label>
                    <select id="gender" onChange={(e) => { handleChange(e) }}>
                        <option value={"male"}>male</option>
                        <option value={"female"}>female</option>
                    </select>
                    <button onClick={RandomNameGenerator}>Random</button>
                </div>
                <div>
                    <input type={"checkbox"} onChange={(e) => {
                        setLocationCheck(!locationcheck)
                    }} />
                    <label> Location </label>
                    <input type={"text"} id="location" value={input.location} onChange={(e) => { handleChange(e) }} />
                    <button onClick={RandomLocationGenerator}>Random Location</button>
                </div>
                <div>
                    <input type={"checkbox"} onChange={() => { setSchoolCheck(!schoolcheck) }} />
                    <label> School </label>
                    <input type={"text"} id="school" value={input.school || ""} onChange={(e) => { handleChange(e) }} />
                    <button onClick={RandomSchoolGenerator}>Random School</button><br /><br />
                    <label> Major </label>
                    <input type={"text"} id="stream" value={input.stream} onChange={(e) => { handleChange(e) }} required />
                    <button onClick={RandomStreamGenerator}>Random Major</button>
                </div>
                <div>
                    <input type={"checkbox"} onChange={() => { setOccupationCheck(!occupationcheck) }} />
                    <label> Occupation </label>
                    <input type={"text"} id="occupation" value={input.occupation} onChange={(e) => { handleChange(e) }} />
                    <button onClick={RandomOccupationGenerator}>Random Occupation</button>
                </div>
                <div>
                    <input type={"checkbox"} onChange={() => setReligionCheck(!religioncheck)} />
                    <label> Religious background </label><br />
                    <textarea rows={"5"} cols={"60"} id="religion" value={input.religion} onChange={(e) => { handleChange(e) }}></textarea><br />
                    <button onClick={RandomReligionGenerator}>Random Religion</button>
                </div>
                <div>
                    <input type={"checkbox"} onChange={() => setReasonchecked(!isReasonchecked)} />
                    <label>Reason for meeting with missionaries </label><br />
                    <textarea rows={"4"} cols={"50"} id="reason" onChange={(e) => { handleChange(e) }}></textarea><br />
                    <button>Random Religion</button>
                </div>
            </div>
            <div className="right">
                <div className="heading">
                    <h2>Result</h2>
                </div>
                <div id="show">{input.name} {locationcheck && input.location ? `is from ${input.location}.` : null} {schoolcheck && input.school ? `${input.gender == "male" ? "He" : "She"} is studying ${input.stream} at ${input.school}.` : null}{occupationcheck && input.occupation ? `Currently ${input.gender == "male" ? " he" : " she"} is working as ${input.occupation}.` : null}{religioncheck && input.religion ? `${input.gender == "male" ? " He" : " She"} believes in ${input.religion}` : null}    {isReasonchecked ? `${input.gender == "male" ? "He" : "She"} meet people for ${input.reason}` : null} </div>
            </div>)
        </div>

    )
}