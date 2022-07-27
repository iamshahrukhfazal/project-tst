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
      <div className="flex justify-center py-2">
        <h1 className="text-2xl">Pormation Banner</h1>
      </div>
      <div className="p-4 space-y-3">
        <div className=" flex flex-col space-x-2 items-start">
          <TextInput
            input={input}
            setInput={setInput}
            label="Enter Time"
            placeholder="Enter Time"
          ></TextInput>
          <TextArea
            input={input}
            setInput={setInput}
            label="Enter Banner Description"
            placeholder="Enter Banner Description"
          ></TextArea>
          <label htmlFor="Select File" className="my-2 inline-block">Select Image</label>
          <input type="file" name="" id="" placeholder="Select Image" />
          <div className="flex justify-center items-center space-x-3 mt-3">
            <label htmlFor="">Activate Banner</label>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="mt-4  ">
            <Button action={() => { }} title="Create New Banner"></Button>
          </div>
        </div>


      </div>
    </AdminBody>
  );
};

export default FAQ;
