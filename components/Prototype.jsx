import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"

function Prototype() {
    return (
        <div className="py-24 relative " id="prototype">
            <div class="custom-shape-divider-top-1719798705">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="md:w-3/4 mx-auto">
                <div className="text-center mt-32">
                    <h1 className="text-main text-4xl font-bold">Prototype</h1>
                    <p>see our prototype</p>
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center gap-10">
                    <Image src="/assets/brain sides-bro.png" width={400} height={400}></Image>
                    <div className="mt-10 md:w-2/4">
                        <h2 className='text-main-light text-2xl font-bold my-5 '>EEG Tech:</h2>
                        <p>EEG technology forms the foundation of the NeuroSpeak Beanie. EEG, or electroencephalography, measures electrical activity in the brain. It is a safe and non-invasive method that has been used in medical applications for decades. Our innovation lies in applying this technology to enhance communication for disabled individuals.</p>
                    </div>
                </div>
                <div className='my-10 text-xl'>Features of NeuroSpeak Beanie
                    EEG Sensors: At the heart of the NeuroSpeak Beanie are the EEG sensors. These sensors are designed to non-invasively measure the electrical activity of the brain. They are highly sensitive and can detect the neural signals associated with different thoughts and intentions.
                    Data Processing Unit: The data processing unit is a critical component that translates raw EEG data into meaningful outputs. Using advanced algorithms and machine learning models, it interprets these signals in real time, ensuring accurate and timely communication.
                    Output Modes: The NeuroSpeak Beanie offers multiple output modes to cater to different communication needs. It can convert thoughts into spoken words using text-to-speech engines, generate images or videos based on visual imagination, and even create songs by interpreting musical thoughts.
                    User Interface: We've designed a user-friendly interface to ensure that the NeuroSpeak Beanie is easy to use. This interface allows users to interact seamlessly with therapists, family members, and medical professionals, making communication more accessible and efficient</div>

                <Carousel className="w-full max-w-xs m-auto">
                    <CarouselContent>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <Image src="/assets/im2.jpg" width={500} height={500} alt='...'></Image>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <Image src="/assets/im3.jpg" width={500} height={500} alt='...'></Image>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <Image src="/assets/im4.jpg" width={500} height={500} alt='...'></Image>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <Image src="/assets/im5.jpg" width={500} height={500} alt='...'></Image>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <Image src="/assets/im6.jpg" width={500} height={500} alt='...'></Image>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <Image src="/assets/im7.jpg" alt='...'  width={500} height={500}></Image>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>



        </div>
    )
}

export default Prototype
