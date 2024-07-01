import Image from "next/image"

function About() {
    return (
        <div className="py-24 relative" id="about">
            <div className="text-center">
                <h1 className="text-main text-4xl font-bold">About</h1>
                <p>Learn more about us</p>
            </div>
            <div class="w-3/4 mx-auto p-5 bg-transparent border-gray-100 border border-opacity-80 my-24 flex flex-col md:flex-row  justify-between rounded-lg shadow ">
                <div className="md:w-1/2 md:mt-10">
                    <h2 className="text-main text-3xl font-bold">What is our solution?</h2>
                    <p>The solution we have developed is called the NeuroSpeak Beanie. This is a state-of-the-art wearable device equipped with EEG sensors that can interpret brain activity and translate it into various forms of communication, including spoken words, images, videos, and songs. Our goal is to bridge the communication gap for disabled individuals and improve their quality of life.</p>
                </div>
                <Image src="/assets/about.jpg" alt="about" className="rounded-lg md:mt-0 mt-6 " width={600} height={600} ></Image>
            </div>
            <div class="custom-shape-divider-bottom-1719798367">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>

        </div>
    )
}

export default About
