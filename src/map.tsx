import React from 'react';
import { Link } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import{useNavigate} from 'react-router-dom'
import Form from './form'
interface Item {
  id: number;
  name: string;
}

let Map: React.FC=()=> {
  const Naviagte=useNavigate();
  const items: Item[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
  ];

  return (
    <div className='flex justify-center items-center  h-screen bg-gray-400 gride gride-'>
      <div className=' w-96 p-6 shadow-lg bg-white rounded-md'>
      <h1 className='text-3xl block text-center font-semibold pb-8 '>List of Items</h1>
      
    
    <ul>
{items.map((item) => (
  <li className='flex justify-center items-center' key={item.id}>{item.name}</li>
))}
</ul>
<button className=" bg-transparent hover:bg-black text-White font-semibold hover:text-white py-2 px-4 border border-black- hover:border-transparent rounded " onClick={()=> Naviagte('/form')}  >
  Next
</button>
</div>


    </div>
  
    
  );
};

export default Map;
