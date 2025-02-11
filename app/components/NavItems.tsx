"use client"
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

interface DropdownData {
  name: string;
  title: string;
  options: string[];
}

export default function Navitems() {
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdowns({
      ...openDropdowns,
      [dropdownName]: !openDropdowns[dropdownName],
    });
  };

  const dropdownData: DropdownData[] = [
    {
      name: "lorem1",
      title: "Lorem Ipsum",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      name: "lorem2",
      title: "Lorem Ipsum",
      options: ["Option A", "Option B", "Option C"],
    },
    {
      name: "lorem3",
      title: "Lorem Ipsum",
      options: ["Option X", "Option Y", "Option Z"],
    },
  ];

  return (
    <div style={{ display: 'flex', gap: '30px' }}>
      {dropdownData.map((dropdown) => (
        <div key={dropdown.name} className="relative inline-block text-left">
          <a
            onClick={() => toggleDropdown(dropdown.name)}
            className="px-4 py-2 text-blue-400 hover:text-gray-900 bg-none hover:cursor-pointer hover:no-underline flex "
          >
            {dropdown.title}<BiChevronDown />
          </a>

          {openDropdowns[dropdown.name] && (
            <div className="absolute left-0 mt-2 w-24 bg-white border border-gray-300 rounded shadow-lg">
              {dropdown.options.map((option, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-700 hover:bg-gray-100"
                >
                  {option}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}