import { useEffect, useState } from "react";


const AllClasses = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/approvedclass/approved')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, [])

    return (
        <div>
            {data.length}
        </div>
    );
};

export default AllClasses;