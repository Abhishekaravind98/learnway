import { Typography } from "@material-tailwind/react";
import Logo from '../assets/png/learnwayLogo.png';

export function Footer() {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-white-50 py-6 text-center md:justify-between">
            <span className="sr-only">Learnway</span>
            <img className="pl-5 h-24 w-auto" src={Logo} alt="learnway-logo" />
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="white"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Study Abroad
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="white"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Test Preparation
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="white"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        About
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="white"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                        Contact
                    </Typography>
                </li>
            </ul>
        </footer>
    );
}