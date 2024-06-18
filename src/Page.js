import React from 'react'

const Page = ({ currentPage, totalPages, onPageChange }) => {
    const buttonStyle = {
        fontSize: '20px',
        padding: '8px 15px',
        borderRadius: '5px',
        backgroundColor: "green",
        color: "white",
        cursor: "pointer"
    };
    const handlePrevious = () => {

        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        console.log("next")
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };
    return (
        <div style={{ display: 'flex', gap: "20px" }}>
            <button style={buttonStyle} onClick={() => handlePrevious()}>Previous</button>
            <button style={buttonStyle}>{currentPage}</button>
            <button style={buttonStyle} onClick={() => handleNext()}>Next</button>
        </div>
    )
}

export default Page