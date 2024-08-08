'use client'
import React from 'react'
import CustumButton from './CustomButton'
import Image from 'next/image'

type Props = {}

const Hero = (props: Props) => {
    const handleScroll = () => { }
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x max-xl:relative">
                <h1 className="hero__title">
                    Find, book, rent a car—quick and super easy!
                </h1>

                <p className="hero__subtitle">
                    Streamline your car rental experience with our effortless booking
                    process.
                </p>

                <CustumButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container max-xl:absolute -z-10 max-xl:opacity-85">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill className="object-contain" />
                </div>

                <div className="hero__image-overlay" />
            </div>
        </div>

        // <div className="hero relative"> {/* Added relative for positioning */}
        //     <div className="flex-1 pt-36 px-8 md:px-16 lg:px-32"> {/* Responsive padding */}
        //         <h1 className="hero__title text-4xl md:text-5xl lg:text-6xl font-bold">
        //             Find, book, rent a car—quick and super easy!
        //         </h1>
        //         <p className="hero__subtitle text-lg md:text-xl mt-4">
        //             Streamline your car rental experience with our effortless booking process.
        //         </p>
        //         <CustumButton // Assuming this is your custom button component
        //             title="Explore Cars"
        //             containerStyles="bg-primary-blue text-white rounded-full mt-8 md:mt-10 px-6 py-3" // Combined styles, responsive margin, padding
        //             handleClick={handleScroll}
        //         />
        //     </div>

        //     <div className="hero__image-container absolute top-0 right-0 w-1/2 h-full"> {/* Absolute positioning, responsive width */}
        //         <div className="hero__image relative w-full h-full"> {/* Maintain aspect ratio */}
        //             <Image
        //                 src="/hero.png"
        //                 alt="hero"
        //                 fill
        //                 className="object-contain"
        //             />
        //         </div>
        //         <div className="hero__image-overlay absolute inset-0 bg-black opacity-30" /> {/* Overlay with inset-0 */}
        //     </div>
        // </div>
    );
}

export default Hero