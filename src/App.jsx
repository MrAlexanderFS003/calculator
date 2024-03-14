import './App.css';
import Buttons from './Components/Buttons';
import './main'

function App() {
  return (
    <>
      <div className="relative min-h-screen max-w-sm mx-auto flex items-center justify-center">
        <div className="absolute bg-gray-50 dark:bg-gray-700 w-screen max-w-sm rounded-lg flex justify-end -translate-y-80 font-roboto-regular">
          <div class="max-w-sm rounded-lg ">
            <div className="max-h-52 p-6 overflow-x-auto">
              <div className="flex flex-col items-end justify-end">
                <p class="mb-3 text-gray-700 dark:text-gray-400 ">? x ? = 30000000</p>
                <p class="mb-3 text-gray-700 dark:text-gray-400">? x ? = 30000000</p>
                <p class="mb-3 text-gray-700 dark:text-gray-400">? x ? = 30000000</p>
              </div>
              <div className="flex flex-wrap justify-end">
                <div className="overflow-x-auto">
                  <h1 class="mb-2 text-3xl font-bold whitespace-nowrap tracking-tight text-gray-900 dark:text-white">20 + 1555555</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block max-w-sm p-6 bg-white rounded-2xl transition-shadow duration-300 ease-in dark:bg-gray-800">
          <Buttons />
        </div>
        <div className="absolute mx-auto bg-transparent translate-y-80">
          <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
            <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          </button>
        </div>

      </div>

    </>
  );
}

export default App;
