import axios from "axios"
import { useState } from "react"

const AskQuestion = () => {
    const [question, setQn] = useState()
    const [body, setBody] = useState()

    const postQuestion = (e) => {
        e.preventDefault()
        console.log(question, body)
        axios.post('/question/addquestion', { question: question, body: body })
            .then(res => console.log(res.data))
    }

    const getTags=(e)=>{
        e.preventDefault()
        console.log(question)
        axios
        .get("/question/gettags",{
            question, num:9
          })
        .then(res => {
            console.log("response from ml", res);
            return res.json({ message: 'get tags', result:res });
        } )
        .catch(err => console.error(err));
    }

    return (
        <div>
            Question
            <form>
                <div>
                    <input type="text" placeholder="Question" onChange={(e) => setQn(e.target.value)} />
                </div>
                <div>
                    <textarea placeholder="Body" onChange={(e) => setBody(e.target.value)} />
                </div>
                <button onClick={getTags}>Get Tags</button>
                <button type="submit" onClick={postQuestion}>Ask</button>
            </form>
        </div>
    )
}

export default AskQuestion