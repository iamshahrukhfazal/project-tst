import { useState } from "react";
import { Banner } from "./components/banner";
import { TopNav } from "./components/top-nav";
import { AiFillHeart, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import {IoLogoWhatsapp} from "react-icons/io"


const Contact = () => {
    return (
        <div className="relative">
            <TopNav />
            <div className="space-y-3 absolute bottom-6 left-4">
                <IoLogoWhatsapp className="text-3xl text-teal-800 cursor-pointer hover:scale-125"/>
                <AiFillFacebook className="text-3xl text-blue-800 cursor-pointer hover:scale-125"/>
                <AiFillInstagram className="text-3xl text-gray-800 cursor-pointer hover:scale-125  "/>
            </div >
            <div className=" flex justify-center items-center flex-col">
                <form className="w-full max-w-lg">
                    <div className=" flex flex-wrap -mx-3 mb-6 py-4">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Last Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                E-mail
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                            {/* <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p> */}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Message
                            </label>
                            <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                            {/* <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <button className="shadow bg-primaryColor hover:bg-pink-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Send
                            </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;




