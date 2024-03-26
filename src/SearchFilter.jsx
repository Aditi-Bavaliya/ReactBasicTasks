import React, {useState} from "react";
import './Search.css';

export default function SearchFilter() {
  const [inputValue, setInputValue] = useState('');
  const [records, setRecords] = useState([
    { id: 1, name: 'United States' },
    { id: 2, name: 'China' },
    { id: 3, name: 'India' },
    { id: 4, name: 'Brazil' },
    { id: 5, name: 'Russia' },
    { id: 6, name: 'United Kingdom' },
    { id: 7, name: 'France' },
    { id: 8, name: 'Germany' },
    { id: 9, name: 'Japan' },
    { id: 10, name: 'Canada' },
  ]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const filteredRecords = records.filter(record =>
    record.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
    <h1>React Search Filter</h1>
    <div>
     <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {filteredRecords.map(record => (
          <li key={record.id}>{record.name}</li>
        ))}
      </ul>
    </div>
    </>
  );
}