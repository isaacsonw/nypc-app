const Form = ({ formData, headerText, subtext }) => {
  return (
    <div>
      <div className='py-6 flex flex-col justify-center sm:py-12'>
        <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
          <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 '></div>
          <div className='relative px-4 py-10 bg-white shadow-lg  sm:p-20 w-[500px]'>
            <div className='max-w-md mx-auto'>
              <div>
                <h1 className='text-5xl font-semibold py-2 orange_gradient'>
                  {headerText}
                </h1>
                <p className=' text-xs m-0 p-0 text-gray-400 mt-4'>{subtext}</p>
              </div>
              <div className='divide-y divide-gray-200'>
                <div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
                  {formData.map(({ label, type, name, placeholder }) => (
                    <div className='relative' key={label}>
                      <input
                        autoComplete='off'
                        id='email'
                        name={name}
                        type={type}
                        className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600'
                        placeholder={placeholder}
                      />
                      <label
                        htmlFor={name}
                        className='absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
                        {label}
                      </label>
                    </div>
                  ))}

                  <p className=' text-xs text-gray-400'>
                    {headerText === "Register" ? "Already" : "Don't"} have an
                    account?{" "}
                    <span className=' hover:text-black hover:cursor-pointer ease-in-out duration-75'>
                      {headerText === "Register" ? "Login" : "Register"} here
                    </span>
                  </p>
                  <div className='relative w-full'>
                    <button className=' bg-blue-900 hover:[black_btn] text-white  mt-2 px-2 py-2 w-full'>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
