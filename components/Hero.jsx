import Image from "next/image"

function Hero() {
    return (
        <div className="flex items-center justify-center bg-transparent mt-72 min-h-sectionHeight  p-6" id="hero">
            <div className=" text-white mx-auto flex flex-col md:flex-row items-center  rounded-lg overflow-hidden w-3/4">
                <div className="p-6 md:w-3/4">
                    <h1 className="text-4xl font-bold text-main mb-4">
                        Beanie Neurospeak
                    </h1>
                    <p className=" mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                    <a
                        href="#"
                        className="inline-block px-6 py-3 bg-main font-semibold rounded-md shadow hover:bg-main-light transition duration-200"
                    >
                        Get more Informations
                    </a>
                </div>
                <Image src="/assets/beanie.jpg" class="" width={602} height={414} alt=""></Image>
            </div>
        </div>
    )
}

export default Hero
