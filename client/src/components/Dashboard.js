import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';

const Dashboard = () => {

    const data = useLocation().state
    console.log(data)

    if (data)
        return (
            <div>
                Dashboard
                <div>
                    <button className="btn btn-primary">
                        <Link to="/tag/622f59196cd075ed2d5da424" style={{ color: "white", textDecoration: "none" }}>Ask Question</Link>
                    </button>
                </div>
            </div>
        )
    else
        return (
            <div>
                <h2>Login first!!!!!!!</h2>
            </div>
        )
}

export default Dashboard