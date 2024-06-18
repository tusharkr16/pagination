import React from 'react';

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
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div style={{ display: 'flex', gap: "20px" }}>
            <button style={buttonStyle} onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    style={{
                        ...buttonStyle,
                        fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
                    }}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
            <button style={buttonStyle} onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
};

export default Page;
