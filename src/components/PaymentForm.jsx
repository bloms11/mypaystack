import React, { useState } from 'react'
import { handlePayment } from '../PaystackPayment'

const PaymentForm = () => {
    const [data, setData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        handlePayment(data.email, parseFloat(data.amount))
    }

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

  return (
    <div className=' w-[400px] h-[280px] border-2 p-2'>
        <h1 className='text-center font-semibold text-[grey]'>Accept Payment API</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-2 mt-4'>
            <label className='font-semibold'>Email</label>
            <input type='email' required className='p-2' name='email' onChange={handleChange}/>

            <label className='font-semibold'>Amount</label>
            <input type='number' required className='p-2' name='amount' onChange={handleChange}/>

            <button className='w-full mt-2 bg-blue-700 text-white p-2'>Proceed to payment</button>
        </form>
    </div>
  )
}

export default PaymentForm