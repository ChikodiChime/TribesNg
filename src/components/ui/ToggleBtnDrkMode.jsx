/* eslint-disable react/prop-types */

const ToggleBtnDrkMode = ({darkMode, toggleDarkMode}) => {
    
  return (
    <>
    <button onClick={toggleDarkMode} className='absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black'>
      {darkMode ? "LHT" : "DRK"}
    </button>
  </>
  )
}

export default ToggleBtnDrkMode