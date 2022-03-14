import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Dashboard = () => {

    const data = useLocation().state
    console.log(data)

    // if (data)
    //     return (
    //         <div>
    //             Dashboard
    //         </div>
    //     )
    // else
    //     return (
    //         <div>
    //             <h2>Login first!!!!!!!</h2>
    //         </div>
    //     )
    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard