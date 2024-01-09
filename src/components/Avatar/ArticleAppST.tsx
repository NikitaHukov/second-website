export const Articlem = ({
  Maintext,
  Starttext,
  BlueThing,
  SecondText,
  ThirdText,
  FourthText,
  FifthText,
  Name,
  Job,
  Picture
}: any) => {
  return [
    <article className="flex justify-center text-white text-6xl  text-center font-sans font-bold p-64 ">
      <div>
        {Maintext}
        <div className="text-xl text-gray-400 p-6">
          <p>
            {Starttext}
            <a className="text-sky-500 cursor-pointer">{BlueThing}</a>{' '}
            {SecondText}
            <p>
              {ThirdText}
              <p>
                {FourthText}
                <p>{FifthText}</p>
              </p>
            </p>
          </p>
        </div>
        <div className=" justify-center flex ">
          <div className="p-3 h-8 rounded-full">
            <img className="rounded-full" src={Picture}></img>
          </div>
          <div className="p-6 text-white  text-xl w-64 text-left ">
            {Name}
            <div>
              <h1 className="text-base text-gray-400 font-normal">{Job}</h1>
            </div>
          </div>
        </div>
      </div>
    </article>
  ]
}
