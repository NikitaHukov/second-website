const bluewords = () => {
  return (
    <a>
      {' '}
      <a className="text-sky-500">flex,</a>{' '}
      <a className="text-sky-500">pt-4,</a>
      <a className="text-sky-500">text-center</a>and
    </a>
  )
}

const click = () => {
  return [console.log('Getting started...')]
}
export const Body = ({
  mainHeading,
  SmainHeading,
  SmainHeading2,
  BlueWord1,
  BlueWord2,
  BlueWord3,
  BlueWord4,
  BlueWord5
}: any) => {
  return [
    <body className=" flex justify-center items-center">
      <div className="grid gap-4 justify-center">
        <div className=" text-white grow text-center text-7xl grid gap-6 justify-center">
          <div className="w-[1200px] text-center mx-auto font-sans font-extrabold ">
            {mainHeading}
          </div>
          <div className="text-xl text-gray-400 w-[750px] mx-auto font-medium">
            <span>{SmainHeading}</span>
            <a className="text-sky-500">{BlueWord1}</a>
            <a className="text-sky-500"> {BlueWord2}</a>
            <a className="text-sky-500"> {BlueWord3} </a> <a>{BlueWord4}</a>
            <a className="text-sky-500"> {BlueWord5}</a> {SmainHeading2}
            {bluewords}
          </div>
        </div>

        <div className=" text-lg flex justify-center items-center gap-8 p-6">
          <a
            onClick={click}
            className=" cursor-pointer hover:bg-sky-800 p-4 font-base text-base font-semibold bg-sky-500 rounded-xl text-white "
          >
            Get started
          </a>
          <a className="p-4 bg-slate-800 hover:bg-slate-700 cursor-pointer rounded-xl w-54 text-lefts items-center gap-3 flex justify-normal">
            <div className="justify-start flex">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="flex-none text-slate-300 dark:text-slate-400"
                aria-hidden="true"
              >
                <path d="m19 19-3.5-3.5"></path>
                <circle cx="11" cy="11" r="6"></circle>
              </svg>
            </div>
            <div className="justify-normal flex items-center gap-20">
              <a className=" text-white fond-serif font-light text-sm">
                Quick search...
              </a>
              <div className="text-base text-gray-500 font-medium">Ctrl K</div>
            </div>
          </a>
        </div>
      </div>
    </body>
  ]
}
