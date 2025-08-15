import React from 'react'

function Loging() {
  return (
    <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen bg-[#011936FF] p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-12">
          <a href="javascript:void(0)"><img
            src="/1.jpeg" alt="logo" className='w-32 inline-block' />
          </a>
        </div>

        <form>
          <div className="space-y-6 ">
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Email Id</label>
              <input name="email" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Password</label>
              <input name="password" type="password" className="text-gray-400 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
            </div>
            

            <div className="flex items-center">
              <label for="remember-me" className="text-gray-400 ml-3 block text-sm">
                forgotten the <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">password ?</a>
              </label>
            </div>
          </div>

          <div className="!mt-12">
            <button type="button" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Login
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-6 text-center">Don't share your Password </p>
        </form>
      </div>
    </div>
  )
}

export default Loging