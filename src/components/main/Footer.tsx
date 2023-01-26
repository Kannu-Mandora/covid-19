import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[color:var(--darker-box)] p-3 fixed bottom-0 w-screen flexColCenter cursor-default select-none" >
      <p className='text-white text-center' >Made with <span className='text-red-400'>&hearts;</span> by <a href='https://github.com/Kannu-Mandora' target="_blank" className='hover:underline underline-offset-4 transition-all ease-in-out' >Kannu Mandora</a></p>
    </div>
  )
}

export default Footer
