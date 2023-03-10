import React, {useState} from 'react'

const ProductForm = () => {
    const [input, setInput] = useState({})

    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }


  return (
    <div>

        <div className=' w-[400px] h-[450px] border-2 p-2'>
            <h1 className='text-center font-semibold text-[grey]'>Product API</h1>
            <form className='flex flex-col gap-y-2 mt-5'>
                <label className='font-semibold'>Name of product</label>
                <input type='string' required className='p-2' name='name' onChange={handleChange}/>

                <label className='font-semibold'>Description</label>
                <input type='string' required className='p-2' name='description' onChange={handleChange}/>

                <label className='font-semibold'>Price</label>
                <input type='nukber' required className='p-2' name='price' onChange={handleChange}/>

                <label className='font-semibold'>{`Currency (NGN, GHS, ZAR or USD)`}</label>
                <input type='string' required className='p-2' name='description' onChange={handleChange}/>

                <button className='w-full mt-2 bg-blue-700 text-white p-2'>Add Poduct</button>
            </form>
        </div>

    </div>
  )
}

export default ProductForm