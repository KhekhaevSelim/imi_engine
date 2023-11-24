// import React from 'react';
// import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
// import { FakeRolesMiniDataType } from '../page';
// import Image from 'next/image';
// interface VirtualizedRolesListProps {
//   data: Array<FakeRolesMiniDataType>;
// }

// const irtualizedRolesList: React.FC<VirtualizedRolesListProps> = ({ data }) => {
//   const Row: React.FC<ListChildComponentProps> = ({ index, style }) => (
// <div className="w-[248px] h-[38px] flex items-center py-[4px] px-[8px] mt-[8px] cursor-pointer z-20" onClick={()=>props.callBack(data[index].id)}>
// <Image src={data[index].src.src} alt="chatBotMiniImage" width={30} height={30} className="mr-[8px]"/>
// <span className="text-[#475467] dark:text-[#94969C]
//                 font-TTNormsRegular text-[16px] leading-[19px]">
//                     {data[index].title}
// </span>
// </div>
//   );

//   return (
//     <List
//       className='h-[800px]'
//       height={306}
//       itemCount={data.length}
//       itemSize={38}
//       width={300}
//     >
//       {Row}
//     </List>
//   );
// };

// export default irtualizedRolesList;