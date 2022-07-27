import { useState } from "react";
import { AdminBody } from "../components/admin-body";
import { Button } from "../components/inputs/input-button";
import { TextInput } from "../components/inputs/input-text";
import { ReactSelector } from "../components/inputs/react-selector";
import { GlobalSearch } from "../components/search";
import { SeriesDetailsCard } from "../components/series-details.card";
import Image from "next/image";
import kids from "./../kuku/icons/kids-stories.png";
import { AiFillCloseSquare ,AiFillEdit} from "react-icons/ai"
import { TextArea } from "../components/inputs/text-area"
import { MdTextFields } from "react-icons/md";


const FAQ = () => {
  const [input, setInput] = useState("");
  return (
    <AdminBody>
      <div className="p-4 space-y-3">
        <div className=" flex flex-col space-x-2 items-start">
          <TextInput
            input={input}
            setInput={setInput}
            label="Enter Name"
            placeholder="Enter Name"
          ></TextInput>
          <TextArea
            input={input}
            setInput={setInput}
            label="Enter Testimonial"
            placeholder="Enter Testimonial"
          ></TextArea>
          <label htmlFor="Select File" className="my-2 inline-block">Select Image</label>
          <input type="file" name="" id="" placeholder="Select Image" />
          <div className="mt-4  ">
            <Button action={() => { }} title="Add Testimonial"></Button>
          </div>
        </div>

        <div className="w-full border-2 border-gray-500 border-opacity-40"></div>

        {/*  */}
        <div className="space-y-2">
          {[1, 2, 3].map((el, index) => (
            <div key={index} className="p-4 bg-primaryColor text-white flex justify-between items-center rounded space-x-2">
              <div>
             <img className="object-cover w-24 h-16 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>

              </div>
              <div className="">
                <h2 className="font-bold text-2xl">Ali Ahmed Khan</h2>
                <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam autem quae veniam! Commodi odio ullam quaerat consequatur autem, incidunt illo ex reiciendis, atque, voluptatum vitae inventore voluptatibus fugit eaque.</h2>

              </div>
              <div className="flex justify-center ">
                <AiFillCloseSquare className="text-white text-2xl" />
                <AiFillEdit className="text-white text-2xl" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </AdminBody>
  );
};

export default FAQ;
