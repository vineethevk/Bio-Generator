import { useState } from "react"
import "./Main.css";

export const Main = () => {
    const [input, setInput] = useState({ name: "Vineeth", gender: "male" });
    const [locationcheck, setLocationCheck] = useState(false);
    const [schoolcheck, setSchoolCheck] = useState(false);
    const [occupationcheck, setOccupationCheck] = useState(false);
    const [religioncheck, setReligionCheck] = useState(false);
    const [isReasonchecked, setReasonchecked] = useState(false);
    const [image, setImage] = useState("./image.jpg");

    const PhotoUpload = (e) => {
        const reader = new FileReader()
        const file = e.target.files[0];
        if (file.type === "image/png") {
            reader.onloadend = () => {
                setImage(reader.result)
                this.setState({
                    file: file,
                    imagePreviewUrl: reader.result
                });
            }
            reader.readAsDataURL(file);
        } else {
            alert("Please choose correct image");
        }

    }

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

    const RandomRestorationGenerator = () => {
        const Restoration = [`hopes that the missionaries can help ${input.gender == "male" ? "him" : "her"} grow a relationship with God`, `is wondering if there is a higher power and if it can benefit ${input.gender == "male" ? "his" : "her"}`, `recieved a priesthood blessing from a friend and now ${input.gender == "male" ? "he" : "she"} wants to learn more`, `was recently diagnosed with cancer. When ${input.gender == "male" ? "he" : "she"} find out about the cancer, ${input.gender == "male" ? "he" : "she"} went to ${input.gender == "male" ? "him" : "her"} for help. The pastor told ${input.gender == "male" ? "his" : "her"} that it was a result of God being displeased with ${input.gender == "male" ? "his" : "her"}. Fortunately, ${input.name} will likely recover from the cancer, but this experience caused ${input.gender == "male" ? "his" : "her"} to visit several other churches of different faiths, but none of them have felt right yet`, `is wondering if there is a higher power and if it can benefit ${input.gender == "male" ? "his" : "her"}`]
        setInput((prev) => ({ ...prev, reason: `${input.gender == "male" ? "He " : "She "}` + Restoration[Math.floor(Math.random() * 4)] }))
    }

    const RandomSalvationGenerator = () => {
        const Salvation = [`really enjoyed ${input.gender == "male" ? "his" : "her"} first meeting with the missionaries (the Restoration) and felt good about the Book of Mormon when ${input.gender == "male" ? "He " : "She "} prayed about it`, `wants to grow closer to God and find purpose in life`, `is having a difficult time in life and is looking for ways to find greater peace, joy, and purpose in life`]
        setInput((prev) => ({ ...prev, reason: `${input.gender == "male" ? "He " : "She "}` + Salvation[Math.floor(Math.random() * 3)] }))
    }

    const RandomGospelGenerator = () => {
        const Gospel = [`is looking to develop a more personal relationship with God`, `was baptized in another church as a baby. ${input.gender == "male" ? "He" : "She"} has met with you two times so far, and has been progressing really quickly`, `has been taught the first two lessons so far, and accepted everything in those lessons. ${input.gender == "male" ? "He " : "She "} felt good about the Book of Mormon when ${input.gender == "male" ? "He" : "She"} prayed about it`];
        setInput((prev) => ({ ...prev, reason: `${input.gender == "male" ? "He " : "She "}` + Gospel[Math.floor(Math.random() * 3)] }))
    }

    const RandomChastityGenerator = () => {
        const Chastity = [`often worries that God is disappointed in ${input.gender == "male" ? "him" : "her"} for not following him better and wants to know how to change.`, `was baptized in another church as a baby. ${input.gender == "male" ? "He " : "She "} has met with you two times so far, and has been progressing really quickly.`];
        setInput((prev) => ({ ...prev, reason: `${input.gender == "male" ? "He " : "She "}` + Chastity[Math.floor(Math.random() * 2)] }))
    }

    const RandomWisdomGenerator = () => {
        const Wisdom = [`has been taught the first 3 lessons so far and is excited about ${input.gender == "male" ? "his" : "her"} baptism coming up next month. ${input.gender == "male" ? "He " : "She "} does not drink or smoke, but drinks coffee every morning`, `is married, and both ${input.gender == "male" ? "He" : "She"} and ${input.gender == "male" ? "his" : "her"} ${input.gender == "male" ? "wife" : "husband"} are social drinkers. One of ${input.name}'s favorite ways to relax is to watch football with a six pack of beer. You have already taught both ${input.name} and ${input.gender == "male" ? "his" : "her"} the first 3 lessons, and they have been to church 2 times with their kids`];
        setInput((prev) => ({ ...prev, reason: `${input.gender == "male" ? "He " : "She "}` + Wisdom[Math.floor(Math.random() * 2)] }))
    }

    const RandomLessonGenerator = () => {
        const Lesson = [`likes reading the Bible and talking about it`, `harbors feelings of resentment towards God because of difficult trials in ${input.gender == "male" ? "his" : "her"} life, but is willing to give religion and spirituality another try`, `is meeting with the missionaries due to encouragement from ${input.gender == "male" ? "his" : "her"} ${input.gender == "male" ? "girlfriend" : "boyfriend"}`];
        setInput((prev) => ({ ...prev, reason: `${input.gender == "male" ? "He " : "She "}` + Lesson[Math.floor(Math.random() * 2)] }))

    }



    return (
        <div className="main">
            <div className="left">
                <div className="heading">
                    <h2>Options</h2>
                </div>
                <div className="profile_pic">
                    <label>Profile Picture  </label>
                    <input type={"file"} onChange={PhotoUpload} />
                </div>
                <div>
                    <label>Name </label>
                    <input type={"text"} id="name" value={input.name} onChange={(e) => { handleChange(e) }} />
                    <label> Gender </label>
                    <select id="gender" onChange={(e) => { handleChange(e) }}>
                        <option value={"male"}>male</option>
                        <option value={"female"}>female</option>
                    </select>
                    <button onClick={RandomNameGenerator}>Random Name</button>
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
                    <textarea rows={"6"} cols={"60"} id="religion" value={input.religion} onChange={(e) => { handleChange(e) }}></textarea><br />
                    <button onClick={RandomReligionGenerator}>Random Religion</button>
                </div>
                <div>
                    <input type={"checkbox"} onChange={() => setReasonchecked(!isReasonchecked)} />
                    <label>Reason for meeting with missionaries </label><br />
                    <textarea rows={"6"} cols={"60"} id="reason" value={input.reason} onChange={(e) => { handleChange(e) }}></textarea><br />
                    <button onClick={RandomRestorationGenerator}>Restoration</button>
                    <button onClick={RandomSalvationGenerator}>Plan of Salvation</button>
                    <button onClick={RandomGospelGenerator}>Gospel of Christ</button>
                    <button onClick={RandomChastityGenerator}>Law of Chastity</button>
                    <button onClick={RandomWisdomGenerator}>Word of Wisdom</button>
                    <button onClick={RandomLessonGenerator} >Any Lession</button>
                </div>

            </div>
            <div className="right">
                <div className="heading">
                    <h2>Result</h2>
                </div>
                <div className="image_div">
                    {image ? <img src={image} alt="profile photo" /> : null}
                </div>
                <div id="show">{input.name} {locationcheck && input.location ? `is from ${input.location}.` : null} {schoolcheck && input.school ? `${input.gender == "male" ? "He" : "She"} is studying ${input.stream} at ${input.school}.` : null}{occupationcheck && input.occupation ? `Currently ${input.gender == "male" ? " he" : " she"} is working as ${input.occupation}.` : null}{religioncheck && input.religion ? `${input.gender == "male" ? " He" : " She"} believes in ${input.religion}.` : null}    {isReasonchecked ? `${input.reason}` : null} </div>
            </div>


        </div>

    )
}