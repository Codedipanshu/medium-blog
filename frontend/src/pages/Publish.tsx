import axios from "axios";
import Appbar from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <Appbar />
      <div className=" flex justify-center w-full pt-8">
        <div className=" max-w-screen-lg w-full">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5 "
            placeholder="Title"
          />
          <TextEditor
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                { title, content: description },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              );
              navigate(`/blog/${response.data.id}`);
            }}
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

const TextEditor = ({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className="w-full mt-2 mb-4 border border-gray-300 rounded-lg">
      <div className="px-2 py-2 bg-white rounded-lg">
        <textarea
          onChange={onChange}
          rows={8}
          className="block w-full px-0 text-sm text-gray-800 bg-white border-0 outline-none"
          placeholder="Write an article..."
          required
        />
      </div>
    </div>
  );
};

export default Publish;
