import React from "react";

export function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="slick-arrow absolute top-1/2 -right-4 md:-right-10 transform -translate-y-1/2 cursor-pointer bg-gray-800 hover:bg-gray-900 rounded-full h-10 w-10 flex items-center justify-center z-10"
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-auto w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </div>
    );
}

export function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="slick-arrow absolute top-1/2 -left-4 md:-left-10 transform -translate-y-1/2 cursor-pointer bg-gray-800 hover:bg-gray-900 rounded-full h-10 w-10 flex items-center justify-center z-10"
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </div>
    );
}