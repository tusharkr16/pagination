import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'; // Import CSS file for styling
import Page from './Page';

const Pagination = () => {
    const [details, setDetails] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
            setDetails(response.data);
        } catch (error) {
            window.alert(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const totalPages = Math.ceil(details.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = details.slice(indexOfFirstItem, indexOfLastItem);


    return (
        <div className="pagination-container">
            <h1 style={{ display: "flex", justifyContent: "center" }}>Employee Data Table</h1>
            <table className="data-table">
                <thead className='heading'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }} >

                <Page
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>

        </div>
    )
}

export default Pagination
