import React, { useState } from "react";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./SlickArrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState(null);

    const certifications = [
        {
            id: 1,
            name: "Infosys Certified AWS Professional Practitioner",
            file: `${process.env.PUBLIC_URL}/assets/aws.pdf`,
        },
        {
            id: 2,
            name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
            file: `${process.env.PUBLIC_URL}/assets/aws.pdf`,
        },
        {
            
            id: 3,
            name: "Configuration Management for Audit and Compliance",
            file: `${process.env.PUBLIC_URL}/assets/Configuration Management.pdf`, // Placeholder
        },
        {
            id: 4,
            name: "Generative AI Landscape",
            file: `${process.env.PUBLIC_URL}/assets/Generative AI Landscape.pdf`, // Placeholder
        },
        {
            id: 5,
            name: "Infosys Certified AWS",
            file: `${process.env.PUBLIC_URL}/assets/Infosys Certified AWS.pdf`, // Placeholder
        },
        {
            id: 6,
            name: "Infosys Certified Front End Web Developer",
            file: `${process.env.PUBLIC_URL}/assets/Infosys Certified Front End Web Developer.pdf`, // Placeholder
        },
           {
            id: 7,
            name: "Infosys Certified JavaScript Developer",
            file: `${process.env.PUBLIC_URL}/assets/Infosys Certified JavaScript Developer.pdf`, // Placeholder
        },
           {
            id: 8,
            name: "Infosys Certified React Expert",
            file: `${process.env.PUBLIC_URL}/asset/Infosys Certified React Expert.pdf`, // Placeholder
        },
        {
            id: 9,
            name: "Problem Solving",
            file: `${process.env.PUBLIC_URL}/assets/Problem Solving.pdf`,
        },       {
            id: 10,
            name: "Responsive webapge using Bootstrap5.pdf",
            file: `${process.env.PUBLIC_URL}/assets/aws.pdf`,
        },
    ];

    const settings = {
        dots: true,
        infinite: certifications.length > 2,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section id="certifications" className="bg-white py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-3xl font-bold mb-12 text-gray-800 text-center">Courses & Certifications</h3>
                <Slider {...settings}>
                  
                    {certifications.map((cert) => (
                        <div key={cert.id} className="p-4">
                            <div
                                className={`bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col h-full ${cert.file ? 'cursor-pointer hover:shadow-xl hover:scale-105 transform transition-all duration-300' : ''}`}
                                onClick={() => cert.file && setSelectedCert(cert.file)}
                            >
                                {cert.file ? (
                                    <>
                                        {/* The preview has been removed. The card is now text-only. */}
                                        {/* The min-h-[12rem] class ensures a consistent height for all cards. */}
                                        <div className="p-8 flex-grow flex items-center justify-center min-h-[12rem]">
                                            <h4 className="font-bold text-gray-800 text-center w-full leading-tight">{cert.name}</h4>
                                        </div>
                                    </>
                                ) : (
                                    <div className="p-6 flex flex-col flex-grow justify-center items-center text-center h-full min-h-[20rem]">
                                        <h4 className="font-bold text-gray-500">{cert.name}</h4>
                                        <p className="text-sm text-gray-400 mt-4">Certificate coming soon</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {selectedCert && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4" onClick={() => setSelectedCert(null)}>
                    <div className="relative w-full h-full max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                        <iframe src={`${selectedCert}#toolbar=0&navpanes=0`} title="Certificate" className="w-full h-full border-none rounded-lg" />
                        <button onClick={() => setSelectedCert(null)} className="absolute -top-4 -right-4 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold hover:bg-gray-200 transition-colors shadow-lg">&times;</button>
                    </div>
                </div>
            )}
        </section>
    );
}