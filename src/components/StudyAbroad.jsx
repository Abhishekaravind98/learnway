import React from 'react';
import Australia from '../assets/png/australia.png';
import Canada from '../assets/png/canada.png';
import France from '../assets/png/france.png';
import Germany from '../assets/png/germany.png';
import Ireland from '../assets/png/ireland.png';
import NewZealand from '../assets/png/new.png';
import UK from '../assets/png/united-kingdom.png';
import GradientLine from './GradientLine';

const StudyAbroad = () => {
    return (
        <div className="container bg-white py-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <h2 className="mb-4 text-4xl  text-left font-bold">
                            Study <span style={{ color: '#EF0000', border: 'white' }}>Abroad</span>
                        </h2>
                        <div className="my-6">
                            <GradientLine />
                        </div>
                        <p className="mt-4 text-lg text-left leading-7 text-gray-700">
                            Embark on an extraordinary educational adventure with Learnway's Study Abroad program.
                            Our mission is to offer students unparalleled opportunities to gain global exposure, immerse themselves in rich and diverse cultures, and achieve academic excellence at some of the world's most prestigious universities.
                            Experience a transformative journey that broadens your horizons, nurtures your personal growth, and equips you with a global perspective that sets you apart in today's interconnected world.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <h2 className="mb-4 text-4xl  text-left font-bold">
                            Popular <span style={{ color: '#EF0000', border: 'white' }}>Destinations</span>
                        </h2>
                        <div className="my-6">
                            <GradientLine />
                        </div>
                        <br></br>
                        <br></br>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                            {[
                                { src: UK, alt: "UK", label: "UK" },
                                { src: France, alt: "France", label: "France" },
                                { src: Germany, alt: "Germany", label: "Germany" },
                                { src: Canada, alt: "Canada", label: "Canada" },
                                { src: Ireland, alt: "Ireland", label: "Ireland" },
                                { src: Australia, alt: "Australia", label: "Australia" },
                                { src: NewZealand, alt: "New Zealand", label: "New Zealand" }
                            ].map((destination, index) => (
                                <div key={index} className="flex items-center justify-center flex-col mx-2 sm:mx-5">
                                    <div className="rounded-full border-2 border-black p-1">
                                        <img src={destination.src} alt={destination.alt} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-20" />
                                    </div>
                                    <span className="mt-2 text-sm sm:text-lg">{destination.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudyAbroad;
