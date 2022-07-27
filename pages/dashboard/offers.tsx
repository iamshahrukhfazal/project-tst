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


const Offers = () => {
  const [input, setInput] = useState("");
  return (
    <AdminBody>
      <div className="p-4 space-y-3">
        <div className="flex justify-center items-center"><h1 className="text-2xl">Create Package</h1></div>
        <div className=" flex flex-col space-x-2 items-start">
          <TextInput
            input={input}
            setInput={setInput}
            label="Package title"
            placeholder="Enter Packege title"
          ></TextInput>



          <TextArea
            input={input}
            setInput={setInput}
            label="Package Description"
            placeholder="Package Description"
          ></TextArea>


        <TextInput
            input={input}
            setInput={setInput}
            label="Package Amount"
            placeholder="Package Amount"
          ></TextInput>

<h1 className="text-2xl">Discount</h1>

        <TextInput
            input={input}
            setInput={setInput}
            label="Discount in Percentage"
            placeholder="Discount in Percentage"
          ></TextInput>

          <TextInput
            input={input}
            setInput={setInput}
            label="Discount Duration"
            placeholder="Discount Duration"
          ></TextInput>



          <div className="mt-4  ">
            <Button action={() => { }} title="Add Package"></Button>
          </div>
        </div>

        <div className="w-full border-2 border-gray-500 border-opacity-40"></div>

        {/*  */}
        <div className="space-y-2">
          {[1, 2, 3].map((el, index) => (
            <div key={index} className="p-4 bg-primaryColor text-white flex justify-between rounded">
              <h2>Title</h2>
              <h2>Amount</h2>
              <h2>Time Left to Expire :: 12 hours</h2>
              <div className="flex text-white">
                <AiFillCloseSquare className="text-white text-2xl" />
                <MdOutlineAddCircleOutline className="text-white text-2xl" />
              </div>

            </div>
          ))}
        </div>

        <div className=" flex flex-col items-start space-x-2 ">
          <TextInput
            input={input}
            setInput={setInput}
            label="Add New Amount"
            placeholder="Add New Amount"
          ></TextInput>

          <div className="mt-4  ">
            <Button action={() => { }} title="Add Amount"></Button>
          </div>
        </div>
      </div>
    </AdminBody>
  );
};

export default Offers;
