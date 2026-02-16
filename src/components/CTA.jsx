import React from 'react';

const CTA = () => {
    return (
        <div>
             <section className="bg-white py-16 px-4">
                <div className="max-w-5xl mx-auto bg-linear-to-b from-[#F8FAFF] to-[#EEF2FF] border border-[#E0E7FF] rounded-[20px] px-8 py-12 md:py-20 bg-[url('https://assets.prebuiltui.com/images/components/cta/cta-grid-bg.png')] bg-cover bg-center bg-no-repeat">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-5xl/14 leading-tight font-semibold tracking-tighter max-w-xl mx-auto mb-4">
                            Let’s create something <span className="bg-linear-to-r from-[#A5B4FC] to-[#666666] bg-clip-text text-transparent">meaningful</span>
                        </h1>
                        <p className="text-md text-neutral-600 max-w-md mx-auto mb-8">
                            I build clean, scalable web experiences with a focus on performance and thoughtful design.
                        </p>
                        <a href="mailto:abidhasanplabon80@gmail.com" target='_blank' className="bg-blue-500 text-white text-md px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer group">
                            <div className="relative overflow-hidden">
                                <span className="block transition-transform duration-200 group-hover:-translate-y-full">
                                    Get in Touch
                                </span>
                                <span className="absolute top-0 left-0 block transition-transform duration-200 group-hover:translate-y-0 translate-y-full">
                                    Get in Touch
                                </span>
                            </div>
                            <svg className='animate-pulse' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5.833 14.168 8.334-8.333m0 8.333V5.835H5.833" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CTA;
