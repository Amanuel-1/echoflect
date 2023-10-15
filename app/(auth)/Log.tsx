import React from 'react'

const Log = () => {
  return (
    <div className="bg-stone-100 flex justify-center items-center h-screen">
    <form className="bg-white p-8 shadow-md rounded-md">
      <h2 className="text-2xl text-center mb-4">Login</h2>
      <div className="mb-4">
        <label className="block text-stone-700 text-sm font-bold mb-2" htmlFor="email">
          Email address
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email address"
        />
      </div>
      <div className="mb-6">
        <label className="block text-stone-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-stone-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign In
        </button>
        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
  </div>
  )
}

export default Log