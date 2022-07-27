import { useState } from "react";
import { AdminBody } from "../components/admin-body";
import { Button } from "../components/inputs/input-button";
import { TextInput } from "../components/inputs/input-text";
import { ReactSelector } from "../components/inputs/react-selector";
import { GlobalSearch } from "../components/search";
import { SeriesDetailsCard } from "../components/series-details.card";
import Image from "next/image";
import kids from "./../kuku/icons/kids-stories.png";
import { AiFillCloseSquare } from "react-icons/ai"
import { MdOutlineAddCircleOutline } from "react-icons/md"
import { TextArea } from "../components/inputs/text-area";


const Subscriber = () => {
    const [input, setInput] = useState("");
    return (
        <AdminBody>
            <div className="p-4 space-y-3">
                <div className="flex justify-center items-center my-2">
                    <div className="w-3/5 flex">
                        <GlobalSearch></GlobalSearch>
                    </div>
                    {/* <ReactSelector></ReactSelector> */}
                   Subscribtion Table
                </div>
                <section className="relative py-16 bg-blueGray-50">
                    <div className="w-full mb-12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
  bg-primaryColor text-white">
                            <div className="rounded-t mb-0 px-4 py-3 border-0">
                                <div className="flex flex-wrap items-center">
                                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                                        <h3 className="font-semibold text-lg text-white">Card Tables</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="block w-full overflow-x-auto ">
                                <table className="items-center w-full bg-transparent border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-black text-white border-black">USER</th>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-black text-white border-black">EMAIL</th>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-black text-white border-black">Phone No.</th>


                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-black text-white border-black">PRICE</th>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-black text-white border-black">Subscrbtion</th>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-black text-white border-black">DOJ</th>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-black text-white border-black">Status </th>
                                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-black text-white border-black"></th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {[1, 2, 3, 4, 5].map((el, key) => (
                                            <tr key={key}>
                                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                                    <img src="https://demos.creative-tim.com/notus-js/assets/img/angular.jpg" className="h-12 w-12 bg-white rounded-full border" alt="..." />
                                                    <span className="ml-3 font-bold text-white">Angular Now UI Kit PRO </span></th>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">urdios@gamil.com</td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">033585811399</td>

                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">1,800 Pkr (montly)</td>

                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <i className="fas fa-circle text-emerald-500 mr-2"></i>Free/Permium</td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    12/21/2022
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="bg-black text-center p-2 rounded">Deactive</div>

                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </AdminBody>
    );
};

export default Subscriber;

