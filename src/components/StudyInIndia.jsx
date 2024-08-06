import WomenPointingRight from '../assets/png/women-pointing-right.png';
import GradientLine from './GradientLine';

export default function StudyInIndia() {
    return (
        <div className="container mx-auto px-4 ">
            <div className='flex'>
                <div className='basis-1/2 pt-20 hidden md:block relative'>

                    {/* <div
                        className="absolute inset-0 flex justify-center items-center"
                        style={{
                            width: '500px', // Adjust the size of the circle
                            height: '500px',
                            background: 'radial-gradient(circle, rgba(255,128,181,0.6) 0%, rgba(144,137,252,0.6) 100%)',
                            filter: 'blur(100px)',
                            borderRadius: '50%',
                            zIndex: '0',
                        }}
                    ></div> */}
                    <img src={WomenPointingRight} alt='women pointing to study abroad' className="relative rounded-full w-90 h-90 object-cover" />
                </div>
                <div className='basis-auto md:basis-1/2'>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl text-left font-bold mb-6 md:mb-8">Study in <span style={{ color: '#EF0000', border: 'white' }}>India</span></h2>
                        <div className="my-6">
                            <GradientLine />
                        </div>
                        <p className="text-lg mb-4 md:mb-6 text-left">
                            India is home to some of the world's oldest universities and offers a diverse range of educational opportunities.
                            Whether you are interested in technology, humanities, sciences, or arts, you can find a program that suits your
                            interests and career goals.
                        </p>
                        <h3 className="text-2xl font-semibold mb-4 text-left">Why Choose India?</h3>
                        <p className="text-lg mb-4 md:mb-6 text-left">
                            Studying in India provides you with a rich cultural experience, access to world-class education, and opportunities
                            to engage with innovative research and technology. Additionally, the cost of education in India is relatively affordable
                            compared to other countries.
                        </p>
                        <p className="text-lg mb-4 md:mb-6 text-left">
                            For more information on studying in India, please contact our admissions office.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
