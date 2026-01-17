import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                    <Link href="/" className="flex title-font mr-0 pr-0 font-medium items-center text-gray-900 mb-4 md:mb-0 group">
                        <img src="https://static.vecteezy.com/system/resources/previews/007/344/853/non_2x/plant-root-icon-design-template-free-vector.jpg" className='mix-blend-darken transform group-hover:scale-110 transition-transform duration-300' width={83} alt="" />
                        <span className="ml-0 text-xl group-hover:text-green-500 transition-colors duration-300">ROOT</span>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="mr-5 hover:text-green-500 transition-colors duration-300 hover:scale-105 transform">Home</Link>
                        <Link href="/root" className="mr-5 hover:text-green-500 transition-colors duration-300 hover:scale-105 transform">Root</Link>
                        <Link href="/about" className="mr-5 hover:text-green-500 transition-colors duration-300 hover:scale-105 transform">About Us</Link>
                        <Link href="/contact" className="mr-5 hover:text-green-500 transition-colors duration-300 hover:scale-105 transform">Contact Us</Link>
                    </nav>
                    <Link target="_blank" href="https://github.com/x-anish-y/root.git">
                    <button className="inline-flex gap-1 items-center bg-gray-100 border-0 py-1.5 px-2 focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-md">
                        <img className='' src="https://www.svgrepo.com/show/512317/github-142.svg" width={24} alt="" />
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar
