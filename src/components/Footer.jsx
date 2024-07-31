import { Typography } from "@material-tailwind/react";
import Logo from '../assets/png/learnwayLogo.png';

export function Footer() {
    const handleScroll = (targetId) => {
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    };
    const reloadPage = () => {
        console.log('Logo clicked, reloading page...');
        window.location.reload();
    };
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-white-50 py-6 text-center md:justify-between">
            <a onClick={reloadPage} className="-m-1.5 p-1.5">
                <span className="sr-only">Learnway</span>
                <img className="pl-5 h-24 w-auto" src={Logo} alt="learnway-logo" />
            </a>
            <ul className="flex flex-wrap items-center px-5 gap-y-2 gap-x-8">
                <li>
                    <Typography
                        as="a"

                        onClick={() => handleScroll('study-abroad')}
                        color="white"
                        className="cursor-pointer font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Study Abroad
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"

                        onClick={() => handleScroll('test-preparation')}
                        color="white"
                        className="cursor-pointer font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Test Preparation
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"

                        onClick={() => handleScroll('about-us')}
                        color="white"
                        className="cursor-pointer font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        About
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"

                        onClick={() => handleScroll('contact')}
                        color="white"
                        className="cursor-pointer font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Contact
                    </Typography>
                </li>
            </ul>
        </footer>
    );
}
