import React from 'react';
import Australia from '../assets/png/australia.png';
import Canada from '../assets/png/canada.png';
import France from '../assets/png/france.png';
import Germany from '../assets/png/germany.png';
import Ireland from '../assets/png/ireland.png';
import Latvia from '../assets/png/latvia.png';
import NewZealand from '../assets/png/new.png';
import UK from '../assets/png/united-kingdom.png';

const StudyAbroad = () => {
    return (
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
            <div className='w-full lg:w-1/2'>
                <div className="mt-10 lg:mt-0">
                    <h2 className="mb-4 text-3xl font-bold">
                        Study Abroad
                    </h2>
                    <br></br>
                    <br></br>
                    <p className="mb-5 text-lg text-body-color dark:text-dark-6 text-left">
                        Embark on an extraordinary educational adventure with Learnway's Study Abroad program.
                        Our mission is to offer students unparalleled opportunities to gain global exposure, immerse themselves in rich and diverse cultures, and achieve academic excellence at some of the world's most prestigious universities.
                        Experience a transformative journey that broadens your horizons, nurtures your personal growth, and equips you with a global perspective that sets you apart in today's interconnected world.
                    </p>
                </div>
            </div>
            <div className='w-full  lg:w-1/2'>
                <h2 className="mb-4 text-3xl font-bold">
                    Popular Destinations
                </h2>
                <div>
                    <br></br>
                    <br></br>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                        <div className="flex items-center justify-center flex-col mx-2 sm:mx-5">
                            <div className="rounded-full border-2 border-black p-2">
                                <img src={UK} alt="UK" className="w-16 h-16 sm:w-20 sm:h-20" />
                            </div>
                            <span className="mt-2 text-sm sm:text-lg">UK</span>
                        </div>
                        <div className="flex items-center justify-center flex-col mx-2 sm:mx-5">
                            <div className="rounded-full border-2 border-black p-2">
                                <img src={France} alt="France" className="w-16 h-16 sm:w-20 sm:h-20" />
                            </div>
                            <span className="mt-2 text-sm sm:text-lg">France</span>
                        </div>
                        <div className="flex items-center justify-center flex-col mx-2 sm:mx-5">
                            <div className="rounded-full border-2 border-black p-2">
                                <img src={Germany} alt="Germany" className="w-16 h-16 sm:w-20 sm:h-20" />
                            </div>
                            <span className="mt-2 text-sm sm:text-lg">Germany</span>
                        </div>
                        <div className="flex items-center justify-center flex-col mx-2 sm:mx-5">
                            <div className="rounded-full border-2 border-black p-2">
                                <img src={Canada} alt="Canada" className="w-16 h-16 sm:w-20 sm:h-20" />
                            </div>
                            <span className="mt-2 text-sm sm:text-lg">Canada</span>
                        </div>
                        <div className="flex items-center justify-center flex-col mx-2 sm:mx-5">
                            <div className="rounded-full border-2 border-black p-2">
                                <img src={Ireland} alt="Ireland" className="w-16 h-16 sm:w-20 sm:h-20" />
                            </div>
                            <span className="mt-2 text-sm sm:text-lg">Ireland</span>
                        </div>
                        <div className="flex items-center justify-center flex-col mx-2 sm:mx-5">
                            <div className="rounded-full border-2 border-black p-2">
                                <img src={Australia} alt="Australia" className="w-16 h-16 sm:w-20 sm:h-20" />
                            </div>
                            <span className="mt-2 text-sm sm:text-lg">Australia</span>
                        </div>
                        <div className="flex items-center justify-center flex-col mx-2 sm:mx-5">
                            <div className="rounded-full border-2 border-black p-2">
                                <img src={NewZealand} alt="New Zealand" className="w-16 h-16 sm:w-20 sm:h-20" />
                            </div>
                            <span className="mt-2 text-sm sm:text-lg">New Zealand</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudyAbroad;
