import axios from "axios"
import { useState } from "react"

const AskQuestion = () => {
    const [question, setQn] = useState()
    const [body, setBody] = useState()

    const postQuestion = (e) => {
        e.preventDefault()
        console.log(question, body)
        axios.post('https://mapsmap.herokuapp.com/v1/api/question/addquestion', { question: question, body: body })
            .then(res => console.log(res.data))
    }

    return (
        <div className="container">
            Question
            <form>
                <div className="mt-3 mb-3">
                    <input type="text" className="form-control" placeholder="Question" onChange={(e) => setQn(e.target.value)} />
                </div>
                <div className="mt-3 mb-3">
                    <textarea placeholder="Body" className="form-control" onChange={(e) => setBody(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={postQuestion}>Ask</button>
            </form>
        </div>
    )
}

export default AskQuestion