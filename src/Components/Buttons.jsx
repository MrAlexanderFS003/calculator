function Buttons() {
    return (
        <>
            <div className="grid gap-x-6 gap-y-4 grid-cols-4">
                {/* Fila 05 */}
                <button className=' p-4 rounded-full font-roboto-regular text-xl bg-gray-50 transition-colors duration-200 ease-in hover:bg-gray-100 hover:shadow  dark:bg-gray-600 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black dark:hover:shadow'>C</button>
                <button className=' p-4 rounded-full font-roboto-regular text-xl bg-gray-50 transition-colors duration-200 ease-in hover:bg-gray-100 hover:shadow  dark:bg-gray-600 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black dark:hover:shadow'>+/-</button>
                <button className=' p-4 rounded-full font-roboto-regular text-xl bg-gray-50 transition-colors duration-200 ease-in hover:bg-gray-100 hover:shadow  dark:bg-gray-600 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black dark:hover:shadow'>%</button>
                <button className=' p-4 rounded-full font-roboto-regular text-xl bg-gray-50 transition-colors duration-200 ease-in hover:bg-gray-100 hover:shadow  dark:bg-gray-600 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black dark:hover:shadow'>/</button>
                {/* Fila 04 */}
                <button className=' p-4 rounded-full font-roboto-regular text-xl bg-gray-50 transition-colors duration-200 ease-in hover:bg-gray-100 hover:shadow  dark:bg-gray-600 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black dark:hover:shadow'>7</button>
                <button className=' p-4 rounded-full font-roboto-regular text-xl bg-gray-50 transition-colors duration-200 ease-in hover:bg-gray-100 hover:shadow  dark:bg-gray-600 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black dark:hover:shadow'>8</button>
                <button className=' p-4 rounded-full font-roboto-regular text-xl bg-gray-50 transition-colors duration-200 ease-in hover:bg-gray-100 hover:shadow  dark:bg-gray-600 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black dark:hover:shadow'>9</button>
                <button className=' p-4 rounded-full font-roboto-regular text-xl bg-gray-50 transition-colors duration-200 ease-in hover:bg-gray-100 hover:shadow  dark:bg-gray-600 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black dark:hover:shadow'>x</button>
                {/* Fila 03 */}
                <button className=' p-4 rounded-full font-roboto-regular text-xl bg-gray-50 transition-colors duration-200 ease-in hover:bg-gray-100 hover:shadow  dark:bg-gray-600 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black dark:hover:shadow'>4</button>
                <button className=' p-4 rounded-full font-roboto-regular text-xl bg-gray-50 transition-colors duration-200 ease-in hover:bg-gray-100 hover:shadow  dark:bg-gray-600 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black dark:hover:shadow'>5</button>
                <button className=' p-4 rounded-full font-roboto-regular text-xl bg-gray-50 transition-colors duration-200 ease-in hover:bg-gray-100 hover:shadow  dark:bg-gray-600 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black dark:hover:shadow'>6</button>
                <button className=' p-4 rounded-full font-roboto-regular text-xl bg-gray-50 transition-colors duration-200 ease-in hover:bg-gray-100 hover:shadow  dark:bg-gray-600 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black dark:hover:shadow'>-</button>
                {/* Fila 02 */}
                <button className=' p-4 rounded-full font-roboto-regular text-xl bg-gray-50 transition-colors duration-200 ease-in hover:bg-gray-100 hover:shadow  dark:bg-gray-600 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black dark:hover:shadow'>1</button>
                <button className=' p-4 rounded-full font-roboto-regular text-xl bg-gray-50 transition-colors duration-200 ease-in hover:bg-gray-100 hover:shadow  dark:bg-gray-600 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black dark:hover:shadow'>2</button>
                <button className=' p-4 rounded-full font-roboto-regular text-xl bg-gray-50 transition-colors duration-200 ease-in hover:bg-gray-100 hover:shadow  dark:bg-gray-600 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black dark:hover:shadow'>3</button>
                <button className=' p-4 rounded-full font-roboto-regular text-xl bg-gray-50 transition-colors duration-200 ease-in hover:bg-gray-100 hover:shadow  dark:bg-gray-600 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black dark:hover:shadow'>+</button>
            </div>
            <div className="flex justify-between">
                {/* Fila 01 */}
                <button className='flex-auto w-64 my-2  p-4 rounded-full font-roboto-regular text-xl bg-gray-50 transition-colors duration-200 ease-in hover:bg-gray-100 hover:shadow  dark:bg-gray-600 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black dark:hover:shadow'>0</button>
                <button className='flex-auto w-32 my-2 mx-2  p-4 rounded-full font-roboto-regular text-xl bg-gray-50 transition-colors duration-200 ease-in hover:bg-gray-100 hover:shadow  dark:bg-gray-600 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black dark:hover:shadow'>.</button>
                <button className='flex-auto w-32 my-2  p-4 rounded-full font-roboto-regular text-xl bg-orange-300 transition-colors duration-200 ease-in hover:bg-orange-400 hover:shadow '>=</button>

            </div>
        </>
    );
}

export default Buttons;