import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"

const Tags = () => {
    const { tagId } = useParams()
    const [tagData, setTagdata] = useState('')
    const [tagName, setTagname] = useState('')
    const [tagQns, setTagqns] = useState([])

    useEffect(() => {
        axios.get(`https://mapsmap.herokuapp.com/v1/api/tag?tagId=${tagId}`)
            .then(res => {
                console.log(res.data.data)
                setTagname(res.data.data.tag.title)
                setTagqns(res.data.data.tag.questions)
            })
    }, [])


    const Qncards = () => {
        if (tagQns == {}) {
            return (
                <div></div>
            )
        }
        else {
            const cards = tagQns.map((qn, n) => {
                const url = `/question/${qn._id}`
                return (
                    <div className="card mt-3 mb-3">
                        <div className="card-head">
                            {qn.question}
                        </div>
                        <hr />
                        <div className="card-body">
                            {qn.body}
                        </div>
                        <div>Click here to <Link to={url} style={{ textDecoration: "none" }}>follow</Link> the forum.</div>
                    </div>
                )
            })
            return (
                <div className="container">
                    {cards}
                </div>
            )
        }
    }

    return (
        <div className="text-center">
            <h1>Tags</h1>
            <h3>{tagName}</h3>
            <Qncards />
        </div>
    )

}

export default Tags