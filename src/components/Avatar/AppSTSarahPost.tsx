export const SarahPost = ({
  imageSarah,
  line1,
  line2,
  line3,
  line4,
  line5,
  author,
  authorJob
}: any) => {
  return [
    <div className="h-96 flex justify-center gap-44">
      <div className="bg-slate-800 h-96 w-80 rounded-lg">
        <div className="flex justify-around p-3">
          <div className="bg-yellow-500"></div>
          <img className="h-28 rounded-full" src={imageSarah}></img>
          <div className="bg-yellow-500"></div>
        </div>

        <div className="text-white text-center font-medium text-lg p-3">
          {line1}
          <div>{line2}</div>
          <div>{line3}</div>
          <div>{line4}</div>
          <div> {line5} </div>
          <div className="text-sky-500 p-2">
            {author}
            <div className="text-gray-500">{authorJob}</div>
          </div>
        </div>
      </div>
      <div className="  h-96 w-80"></div>
    </div>
  ]
}
