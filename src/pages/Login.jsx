import Button from '../components/Button'
import Input from '../components/Input'
import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div>
        <h1 className='text-5xl font-semibold mb-3'>Login</h1>
        <p className='text-base font-normal'>Login untuk mengakses akun <span className='text-green-500'>Sadar</span> anda</p>

        <div className='mt-10 flex flex-col gap-2'>
          <Input name="Email" type="email" />
          <Input name="Password" type="password" />
        </div>
        <input type="checkbox" name="remember" id="remember" />Remember me

        <div className='w-full'>
          <Button />
        </div>

        <h5 className='text-center'>Tidak punya akun? <span className='text-red-500 cursor-pointer'>Sign Up</span></h5>

        <p>Atau login dengan</p>

        <button className='flex justify-center items-center'>
          <img src="" alt="logo Google" />
        </button>

        <p>Login sebagai tamu</p>
      </div>
    )
  }
}

export default Login