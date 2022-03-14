import { useParams } from "react-router-dom"
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
                setTagname(res.data.data.tag.title)
                setTagqns(res.data.data.tag.questions)
            })
            .then(() => console.log(tagQns))



    }, [])


    const Qncards = () => {
        if (tagQns == {}) {
            return (
                <div></div>
            )
        }
        else {
            const cards = tagQns.map((qn, n) => {
                return (
                    <div className="card card-body">
                        {n}
                    </div>
                )
            })
            return (
                <div>
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