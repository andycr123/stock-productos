import React from 'react'
import InputField from './inputField';
import InputColor from './inputColor';
const inputForms = () => {
  return (
    <div className='col-span-2 p-6 grid gap-4'>
       <InputField></InputField>
        <InputColor></InputColor>
        </div>
  )
}

export default inputForms;