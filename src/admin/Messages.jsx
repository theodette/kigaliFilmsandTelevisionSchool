import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Messages() {
  const [userMessage, setUserMessage] = useState([]);
  const [statusList, setStatusList] = useState({}); // Track statuses for each message

  useEffect(() => {
    loadMessage();
  }, []);

  const loadMessage = async () => {
    const result = await axios.get("http://localhost:8080/allMessages");
    setUserMessage(result.data);

    // Initialize statuses for all messages as "Not Replied"
    const initialStatuses = result.data.reduce((acc, message) => {
      acc[message.id] = "Not Replied";
      return acc;
    }, {});
    setStatusList(initialStatuses);
  };

  const handleClick = (id) => {
    // Update status for a specific message
    setStatusList((prevStatusList) => ({
      ...prevStatusList,
      [id]: "Replied",
    }));
  };

  return (
    <div className='flex flex-col space-y-14 justify-center '>
        
            <h1 className='text-[#011936FF] p-10 text-center font-extrabold text-4xl'>View Message queries</h1>
     

    <div className="relative justify-center m-20 flex flex-col  text-gray-400 bg-[#011936FF] shadow-md bg-clip-border">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Number
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Name
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Contact
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Message
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Status
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {userMessage.map((message) => (
            <tr key={message.id}>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {message.id}
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {message.name}
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {message.email}
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {message.message}
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <button
                  onClick={() => handleClick(message.id)}
                  className="px-4 py-2 text-white bg-blue-500 rounded"
                >
                  {statusList[message.id] || "Not Replied"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</div>

  );
}

export default Messages;
