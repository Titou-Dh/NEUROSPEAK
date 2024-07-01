import Image from 'next/image';

function Footer() {
    return (
        <footer className="rounded-lg shadow m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src="/assets/logo.png" alt="Flowbite Logo" width={32} height={32} />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Neurospeak</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Our prototype</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                    <div className="flex gap-8"> {/* Added CSS class */}
                        <a target='_blank' href="https://www.facebook.com/share/MWdV6NEssAimTwXj/?mibextid=LQQJ4d"><svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="36" height="36" viewBox="0 0 50 50">
                            <path fill='#fff' d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                        </svg></a>
                        <a href="#"><svg  width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 96" id="email"><g><path fill='#fff' d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path></g></svg></a>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024<a href="#" className="hover:underline">Neurospeak™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;
