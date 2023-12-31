import React from 'react';

interface Item {
  id: number;
  name: string;
}

const Mapp: React.FC = () => {
  const items: Item[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
  ];

  return (
    <div className='flex justify-center items-center  h-screen bg-gray-400'>
      <div className=' w-96 p-6 shadow-lg bg-white rounded-md'>
    <div className='flex justify-center items-center  '>
      <h1 className='text-3xl block text-center font-semibold pb-8 '>List of Items</h1>
      <div className='mt-3'>
    
      </div>
    </div>
    <ul className=''>
{items.map((item) => (
  <li className='flex justify-center items-center' key={item.id}>{item.name}</li>
))}
</ul>
</div>
    </div>
  );
};

export default Mapp;
