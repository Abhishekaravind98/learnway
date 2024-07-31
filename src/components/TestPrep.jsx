import GradientLine from "./GradientLine";
import WomenPointingLeft from '../assets/png/women-pointing.png'


export default function TestPrep() {
    return (
        <div className="container mx-auto px-4 ">
            <div className="flex">
                <div className="basis-auto md:basis-1/2 mt-10 lg:mt-0  ">
                    <h3 className="text-4xl text-left font-bold mb-4 ">Test <span style={{ color: '#EF0000', border: 'white' }}>Preparation</span></h3>
                    <div className="my-6">
                        <GradientLine />
                    </div>
                    <p className="text-lg mb-4 md:mb-6 text-left">
                        Admission to foreign colleges requires students to take different tests based on the course they apply for. Some of these tests are: IELTS, TOEFL, GRE, GMAT, SAT, PTE, and ACT. Every student receives personalized attention and training on preparing for these tests so that they can score the highest possible marks.
                    </p>
                </div>
                <div className="basis-1/2 pt-0 hidden md:block relative">
                    <img src={WomenPointingLeft} alt='women pointing to study abroad' className="relative  rounded-full w-90 h-90 object-cover" />
                </div>
            </div>

        </div>
    );
}