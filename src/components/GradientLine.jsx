import React from 'react';

const GradientLine = () => {
    return (
        <div className="relative">
            <div
                className="h-1 w-24"
                style={{
                    background: 'linear-gradient(90deg, #015CB5 0%, rgba(1, 92, 181, 0) 100%)',
                }}
            />
        </div>
    );
};

export default GradientLine;
