// import React, { useState } from 'react';
// import { HiOutlineClock } from 'react-icons/hi';

// function Duration({onUpdate}) {
//   const [selected, setSelected] = useState();
// const handleSelect = (value) => {
//     setSelected(value); // Update local UI state
//     onUpdate(value);    // Update parent state
//   }; 

//   const options = [
//     { label: '30 Sec', value: 30 },
//     { label: '60 Sec', value: 60 }
//   ];

//   return (
//     <div className="w-full max-w-xs px-4 mt-6">
//       {/* Label */}
//       <div className="flex items-center gap-2 mb-3 ml-1">
//         <HiOutlineClock className="text-blue-500 text-lg" />
//         <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
//           Select Duration
//         </span>
//       </div>

//       {/* The Selection Bar */}
//       <div className="flex gap-3">
//         {options.map((option) => (
//           <button
//             key={option.value}
//             onClick={() => handleSelect(option.value)}
//             className={`flex-1 py-4 rounded-xl font-bold transition-all duration-300 border-2 
//               ${selected === option.value 
//                 ? 'bg-blue-600/10 border-blue-600 text-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.2)]' 
//                 : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-400'
//               }`}
//           >
//             <span className="text-lg">{option.label}</span>
//           </button>
//         ))}
//       </div>
      
//       {/* Dynamic Hint */}
//       <p className="mt-3 text-[11px] text-slate-600 text-center italic">
//         Current output length: <span className="text-blue-500 font-bold">{selected} Seconds</span>
//       </p>
//     </div>
//   );
// }

// export default Duration;



import React, { useState } from 'react';
import { HiOutlineClock } from 'react-icons/hi';

function Duration({ onUpdate }) {
  // Initialize with 30 so a value exists by default
  const [selected, setSelected] = useState(30); 

  const options = [
    { label: '30 Sec', value: 30 },
    { label: '60 Sec', value: 60 }
  ];

  const handleSelect = (value) => {
    setSelected(value); // Updates the local UI (highlighting the button)
    onUpdate(value);    // Sends the data up to 'childdata' in page.jsx
  }; 

  return (
    <div className="w-full max-w-xs px-4 mt-6">
      {/* Label */}
      <div className="flex items-center gap-2 mb-3 ml-1">
        <HiOutlineClock className="text-blue-500 text-lg" />
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Select Duration
        </span>
      </div>

      {/* The Selection Bar */}
      <div className="flex gap-3">
        {options.map((option) => (
          <button
            key={option.value}
            type="button" // Prevents accidental form submissions
            onClick={() => handleSelect(option.value)}
            className={`flex-1 py-4 rounded-xl font-bold transition-all duration-300 border-2 
              ${selected === option.value 
                ? 'bg-blue-600/10 border-blue-600 text-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.2)]' 
                : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-400'
              }`}
          >
            <span className="text-lg">{option.label}</span>
          </button>
        ))}
      </div>
      
      {/* Dynamic Hint */}
      <p className="mt-3 text-[11px] text-slate-600 text-center italic">
        Current output length: <span className="text-blue-500 font-bold">{selected} Seconds</span>
      </p>
    </div>
  );
}

export default Duration;