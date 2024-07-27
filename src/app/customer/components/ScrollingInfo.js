// 'use client';
// import React from 'react';
// import { FiFire } from 'react-icons/fi';
// import { motion } from 'framer-motion';

// const ScrollingInfo = () => {
//   const infoItems = [
//     'Monthly deals & discounts',
//     '100k products at one click',
//     'Flat 199 delivery charges',
//     'Same day delivery',
//     'Kyu ke Yahan Sab Milta Ha'
//   ];

//   return (
//     <div className="bg-white py-2 border-b border-gray-300 overflow-hidden">
//       <div className="container mx-auto flex items-center space-x-4 text-gray-700">
//         <motion.div
//           className="flex items-center space-x-4"
//           animate={{ x: ['100%', '-100%'] }}
//           transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
//         >
//           {infoItems.map((item, index) => (
//             <div key={index} className="inline-flex items-center mr-10">
//               <FiFire className="text-black mr-2" />
//               <span className={`text-${index % 2 === 0 ? 'black' : index % 3 === 0 ? 'orange-500' : 'red-500'}`}>
//                 {item}
//               </span>
//             </div>
//           ))}
//           {infoItems.map((item, index) => (
//             <div key={index + infoItems.length} className="inline-flex items-center mr-10">
//               <FiFire className="text-black mr-2" />
//               <span className={`text-${index % 2 === 0 ? 'black' : index % 3 === 0 ? 'orange-500' : 'red-500'}`}>
//                 {item}
//               </span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ScrollingInfo;
