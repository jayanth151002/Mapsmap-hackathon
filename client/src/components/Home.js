import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  axios.get("/data").then((res) => console.log(res.data));

  return (
    <div>
      <div className=" m-3">
        <button className="btn btn-primary">
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
        </button>
      </div>
      <div style={{ minHeight: "50vh" }}>

      </div>
      <div className="text-center">
        <button className="btn btn-primary">
          <Link to="/askquestion" style={{ color: "white", textDecoration: "none" }}>Ask Question</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
