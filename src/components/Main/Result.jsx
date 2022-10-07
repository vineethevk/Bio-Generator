import "./Main.css"
export const Result = ({ data }) => {
    console.log(data);
    return (
        <div className="right">
            <div className="heading">
                <h2>Result</h2>
            </div>
            <div>{data}</div>
        </div>)
}