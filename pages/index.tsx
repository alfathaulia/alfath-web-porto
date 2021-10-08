import React, { FC } from 'react';
import Navbar from '../components/Navbar/Navbar';
import ScrollToButton from '../components/ScrollToButton';

const sections = ['intro', 'description', 'work', 'contact'];

const IndexPage: FC = () => {
    const descriptionRef = React.useRef<HTMLDivElement>(null);
    return (
        <>
            {/* <Navbar /> */}
            <section ref={descriptionRef} id={sections[0]}>
                <div className="container max-w-full h-screen">
                    <div className={`sm:p-10 p-3  bg-primary h-full `}>
                        <div className={`rounded-lg bg-primary2 md:p-10 p-10 h-full shadow-lg `}>
                            <div className="flex items-center justify-center h-full">
                                <div className="text-gray-800 font-bold sm:text-4xl text-xl text-center ">
                                    Holaa!!!, <br /> I'm Aulia <br /> I'm a Software Engineer
                                </div>
                            </div>

                            <ScrollToButton toId="description">Move To Description!</ScrollToButton>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={descriptionRef} id={sections[1]}>
                <div className="container max-w-full h-screen">
                    <div className={`sm:p-10 p-3  bg-primary2 h-full `}>
                        <div className={`rounded-lg bg-primary md:p-10 p-10 h-full shadow-lg`}>
                            <div className="flex items-center justify-center h-full">
                                <div className="text-gray-800 font-bold sm:text-4xl text-xl text-center ">About Me</div>
                            </div>
                            <div className="flex justify-between ">
                                <ScrollToButton toId="work">Move To Work!</ScrollToButton>
                                <a
                                    href="/about-me"
                                    className="bg-yellow-500 hover:bg-yellow-600 font-bold text-lg text-gray-700"
                                >
                                    Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={descriptionRef} id={sections[2]}>
                <div className="container max-w-full h-screen">
                    <div className={`sm:p-10 p-3  bg-primary h-full `}>
                        <div className={`rounded-lg bg-primary2 md:p-10 p-10 h-full shadow-lg`}>
                            <div className="flex items-center justify-center h-full">
                                <div className="text-gray-800 font-bold sm:text-4xl text-xl text-center ">
                                    My Latest
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <ScrollToButton toId="contact">Move To Contact!</ScrollToButton>
                                <a
                                    href="/latest-work"
                                    className="bg-yellow-500 hover:bg-yellow-600 font-bold text-lg text-gray-700"
                                >
                                    Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={descriptionRef} id={sections[3]}>
                <div className="container max-w-full h-screen">
                    <div className={`sm:p-10 p-3  bg-primary2 h-full `}>
                        <div className={`rounded-lg bg-primary md:p-10 p-10 h-full shadow-lg`}>
                            <div className="flex items-center justify-center h-full">
                                <h1 className="text-gray-800 font-bold sm:text-4xl text-xl text-left ">Contact Me</h1>
                            </div>
                            <div className="flex justify-between">
                                <ScrollToButton toId="intro">Move To Intro!</ScrollToButton>
                                <a
                                    href="/contact-me"
                                    className="bg-yellow-500 hover:bg-yellow-600 font-bold text-lg text-gray-700"
                                >
                                    Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndexPage;
