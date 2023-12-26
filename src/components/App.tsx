function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}

const Header = () => (
  <header className=" grid grid-flow-col items-center h-20 tablet:bg-pink-500 laptop:bg-blue-500 desktop:bg-green-500 justify-between px-5">
    <div>KCHK Krakow</div>
    <div className="bg-red-500 h-max w-max p-4 rounded-full">
      <div>Sign up</div>
    </div>
  </header>
)

const Main = () => (
  <main>
    <div>Image</div>
    <div>
      <div>KCHK Krakow</div>
      <div className="item"> Strona Kosciola Chrystus Krolem...</div>
    </div>
  </main>
)

export default App
