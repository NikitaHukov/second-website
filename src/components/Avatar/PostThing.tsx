export const PostThing = ({ title, job, line, line2, line3, image }: any) => {
  const array = [line, line2, line3]
  return (
    <div>
      <div className="bg-slate-800 rounded-lg p-6 pb-0">
        <div className="text-xl flex gap-4">
          <img className="h-16 rounded-full" src={image}></img>
          <h1>
            <h1 className="font-semibold text-gray-300"> {title}</h1>{' '}
            <h2 className="text-base text-gray-400">{job}</h2>{' '}
          </h1>
        </div>{' '}
        <div className="grid gap-4 pt-6">
          {array.map((x) => (
            <p>{x}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
