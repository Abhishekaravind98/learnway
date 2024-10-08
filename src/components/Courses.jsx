import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/png/logo.svg';
import WomenHoldingBook from '../assets/png/women.png';
import Youngster from '../assets/jpg/youngsters.jpg';
import StudyAbroad from './StudyAbroad';
import About from './About';
import WhyChooseUs from './WhyChooseUs';
import Contact from './Contact';
import StudyInIndia from './StudyInIndia';
import GradientBackground from './GradientBg';
import TestPrep from './TestPrep';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Study abroad', targetId: 'study-abroad' },
    { name: 'Study in India', targetId: 'study-in-india' },
    { name: 'Test Preparation', targetId: 'test-preparation' },
    { name: 'About Us', targetId: 'about-us' },
    { name: 'Contact', targetId: 'contact' },
];

export default function Courses() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showScroll, setShowScroll] = useState(false);
    const [menuAnimating, setMenuAnimating] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            setMenuAnimating(true);
        } else {
            const timer = setTimeout(() => setMenuAnimating(false), 300); // Duration of the slide-out animation
            return () => clearTimeout(timer);
        }
    }, [mobileMenuOpen]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleMobileMenuClick = (targetId) => {
        setMobileMenuOpen(false);
        setTimeout(() => {
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    const handleNavClick = (targetId) => {
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    };

    const reloadPage = () => {
        console.log('Logo clicked, reloading page...');
        window.location.reload();
    };

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="bg-white flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a onClick={reloadPage} className="-m-1.5 p-1.5">
                            <span className="sr-only">Learnway</span>
                            <img className="h-12 w-auto" src={Logo} alt="learnway logo" />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleNavClick(item.targetId)}
                                className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                </nav>
                {menuAnimating && (
                    <Dialog
                        as="div"
                        className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
                        open={mobileMenuOpen}
                        onClose={setMobileMenuOpen}
                    >
                        <div className="fixed inset-0 z-50 transition-opacity duration-300" />
                        <Dialog.Panel
                            className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300 ${mobileMenuOpen ? 'slide-in' : 'slide-out'}`}
                        >
                            <div className="flex items-center justify-between">
                                <a onClick={reloadPage} href="" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Learnway</span>
                                    <img className="h-8 w-auto" src={Logo} alt="learnway" />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <button
                                                key={item.name}
                                                onClick={() => handleMobileMenuClick(item.targetId)}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                )}
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className='block md:hidden lg:hidden'><GradientBackground /></div>
                <div className="absolute inset-0 -z-10 flex items-center">
                    <img
                        src={Youngster}
                        alt="Background"
                        className="w-50 lg:w-full md:w-full h-full pt-20 object-cover hidden lg:block md:block  lg:object-contain md:object-contain opacity-100"
                        style={{
                            filter: 'blur(0px)',
                            position: 'absolute',
                            right: -100,
                            top: 0,
                            width: '100%',
                        }}
                    />
                    <div
                        className="absolute inset-0 "
                        style={{ width: '100%' }}
                    ></div>
                </div>
                <div className="relative flex flex-col lg:flex-row">
                    <div className="relative z-10 lg:basis-1/2 mr-4 max-w-2xl pt-20 pb-20 sm:pt-48 sm:pb-28 lg:pt-56 lg:pb-30 text-left">
                        <div className="text-left">
                            <h1 className="text-7xl font-bold tracking-tight text-blue-900 sm:text-7xl">
                                Begin your <span style={{ color: '#EF0000', border: 'white' }}>Education</span> journey here
                            </h1>

                            <div className="mt-10 flex items-center gap-x-6">
                                <a
                                    href="#contact"
                                    className="rounded-full bg-red-600 px-7 py-4 text-lg font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                                >
                                    Apply now
                                </a>
                                <a href="#study-abroad" className="text-lg font-semibold leading-6 text-gray-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Why Choose Us Section */}
            <section className="py-0 md:py-10">
                <WhyChooseUs />
            </section>

            {/* Add your sections here */}
            <section id="study-abroad" className="py-0 md:py-10">
                <StudyAbroad />
            </section>

            <section id="study-in-india" className="py-0 md:py-10">
                <StudyInIndia />
            </section>

            <section id="test-preparation" className="py-0 md:py-10">
                <TestPrep />
            </section>

            <section id="about-us" className="py-0 md:py-10">
                <About />
            </section>

            <section id="contact" className="py-0 md:py-10 bg-white dark:bg-dark lg:py-[120px]">
                <Contact />
            </section>
            <a
                href="https://wa.me/+917034342414?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-20 right-5 z-50 flex items-center p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
            >
                <ChatBubbleLeftRightIcon className="h-6 w-6 md:h-8 md:w-8 mr-0 md:mr-2" />
                <span className="hidden md:inline">Chat with us</span>
            </a>
            {showScroll && (
                <button
                    className="fixed bottom-5 right-5 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            )}
        </div>
    );
}
