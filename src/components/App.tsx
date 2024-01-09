import { Logo } from './Logo'

function App() {
  return (
    <div className="bg-slate-900 min-w-screen min-h-screen text-white overflow-hidden">
      <div
        id="header"
        className="grid grid-flow-col justify-between px-8 h-20 items-center"
      >
        <div>
          <Logo />
        </div>
        <div className="flex gap-6 items-center">
          <div>Docs</div>
          <div>Components</div>
          <div>Blog</div>
          <div>Showcase</div>
        </div>
      </div>
    </div>
  )
}
export default App
