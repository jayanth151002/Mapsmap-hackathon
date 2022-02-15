import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  axios.get("/data").then((res) => console.log(res.data));

  return (
    <div>
      <button>
        <Link to="/askquestion">Ask Question</Link>
      </button>
    </div>
  );
};

export default Home;
