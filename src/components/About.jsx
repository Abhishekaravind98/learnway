import React from 'react';
import GradientLine from './GradientLine';

const About = () => {
    return (
        <div className="container bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0"> {/* Added mb-8 for mobile spacing */}
                        <h2 className="mb-4 text-4xl text-left font-bold">About <span style={{ color: '#EF0000', border: 'white' }}>Us</span></h2>
                        <div className="my-6">
                            <GradientLine />
                        </div>
                        <p className="mt-4 text-lg leading-7 text-gray-700 text-left">
                            Learnway is dedicated to providing exceptional education and support to students aspiring to study abroad or in India.
                            Our mission is to guide students through their educational journey with personalized counseling, expert advice, and a
                            commitment to excellence. With strong networks to top universities and a team of experienced professionals, we ensure
                            that every student receives the guidance and support they need to achieve their academic goals.
                        </p>
                        <p className="mt-4 text-lg leading-7 text-gray-700 text-left">
                            Our values of dedication, excellence, and personal support drive all our actions. We believe in making dreams come true
                            by offering tailored guidance and mentoring to each student. At Learnway, we are not just a consultancy; we are a
                            supportive community committed to your success.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 px-4"> {/* Removed the empty section */}
                        <h2 className="mb-4 text-4xl text-left font-bold">Our <span style={{ color: '#EF0000', border: 'white' }}>Team</span></h2>
                        <div className="my-6">
                            <GradientLine />
                        </div>
                        <p className="mt-4 text-lg leading-7 text-gray-700 text-left">
                            Our team consists of experienced education consultants, career counselors, and support staff who work together to
                            provide comprehensive services to our students. With years of experience and a deep understanding of the education
                            system, our team is equipped to help students navigate their educational paths with confidence and ease.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
