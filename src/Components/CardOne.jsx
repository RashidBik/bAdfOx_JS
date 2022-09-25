import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../Pages/Play';

const CardOne = ({shapes}) => {
  const [execute, setExecute] = useState(false);
  const navigate = useNavigate();
  const context = useContext(Context);
  return (
    <>
    {shapes.map((item,index) => {
      return (
        <main key={index} className='bg-gray-300'>
     <header className=''>
      <button className=''>exit</button>
      <div className=''>{item.name}</div>
      <div></div>
     </header>
      <section className=''>
       <div className={`arr ${item.bgBefor}`}>
         <div className="shapes">{` ${item.tools1.a1}`}</div>
         <div className="shapes">{` ${item.tools1.b1}`}</div>
         <div className="shapes">{` ${item.tools1.c1}`}</div>
         <div className="shapes">{` ${item.tools1.d1}`}</div>
         <div className="shapes">{` ${item.tools1.e1}`}</div>
         <div className="shapes">{` ${item.tools1.f1}`}</div>
         <div className="shapes">{` ${item.tools1.g1}`}</div>
         <div className="shapes">{` ${item.tools1.h1}`}</div>
         <div className="shapes">{` ${item.tools1.i1}`}</div>
       </div>
       <button onClick={()=> setExecute(true)} className='btn hover:text-green-700 m-2 text-[30px] text-gray-900'>{item.exec}</button>
       <div className={`arr ${item.bgAfter} `}>
        {execute && ( 
                    <>
                    <div className="shapes">{` ${item.tools2.a2}`}</div>
                    <div className="shapes">{` ${item.tools2.b2}`}</div>
                    <div className="shapes">{` ${item.tools2.c2}`}</div>
                    <div className="shapes">{` ${item.tools2.d2}`}</div>
                    <div className="shapes">{` ${item.tools2.e2}`}</div>
                    <div className="shapes">{` ${item.tools2.f2}`}</div>
                    <div className="shapes">{` ${item.tools2.g2}`}</div>
                    <div className="shapes">{` ${item.tools2.h2}`}</div>
                    <div className="shapes">{` ${item.tools2.i2}`}</div>
                  </>
        )}
       </div> 
      </section>
     <footer className=''>
       <div className='btn bg-yellow-500 rounded-full'>{item.count}</div>
       <button className='btn bg-blue-700 text-white hover:shadow-blue-400'
       onClick={() => context.fDispatch(item.syntax)}>Syntax</button>
       <button className='btn bg-red-700 hover:shadow-red-400' 
       onClick={() => context.fDispatch(item.prev)}>Prv</button>
       <button className='btn bg-green-700 hover:shadow-green-400' 
       onClick={() => context.fDispatch(item.next)}>nex</button>
     </footer>
    </main>
      )
    })}
    </>
  )
}

export default CardOne
