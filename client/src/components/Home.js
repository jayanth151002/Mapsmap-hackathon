import axios from 'axios'

const Home = () => {

    axios.get('/data')
        .then(res => console.log(res.data))

    return (
        <div>
            Home
        </div>
    )
}

export default Home