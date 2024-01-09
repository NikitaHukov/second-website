import React, { useState } from 'react'
import GenderToggle from './GenderToggle'

const App: React.FC = () => {
  // State variables for height and weight
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [result, setResult] = useState<number | undefined>()

  // Event handlers for input changes
  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value)
  }

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value)
  }
  const handleAgeChange = (e: any) => {
    setAge(e.target.value)
  }
  const addHeightWeight = (height: number, weight: number): number => {
    return height + weight
  }
  const calculateResult = () => {
    const numericHeight = parseFloat(height)
    const numericWeight = parseFloat(weight)

    if (!isNaN(numericHeight) && !isNaN(numericWeight)) {
      const sum = addHeightWeight(numericHeight, numericWeight)
      setResult(sum)
    } else {
      setResult(undefined)
    }
  }

  return (
    <div className=" text-white text-center">
      <button onClick={() => setAge(100)}>Set 100 age</button>
      <div className=" h-56"></div>
      <p className="flex justify-center text-6xl font-black">Fat calculator</p>
      <div className=" bg-slate-800 w-max mx-auto">
        <div>
          <div className="text-5xl ">
            <label htmlFor="ageInput"> Age: </label>
            <input
              className="text-black"
              type="text"
              id="ageInput"
              value={age}
              onChange={handleAgeChange}
            />
          </div>
          {/* First input for height */}
          <div className="text-5xl ">
            <label htmlFor="heightInput">Height (in cm): </label>
            <input
              className="text-black"
              type="text"
              id="heightInput"
              value={height}
              onChange={handleHeightChange}
            />
          </div>

          {/* Second input for weight */}
          <div className="text-5xl ">
            <label htmlFor="weightInput">Weight (in kg): </label>
            <input
              className="text-black"
              type="text"
              id="weightInput"
              value={weight}
              onChange={handleWeightChange}
            />
          </div>
          <GenderToggle
            initialGender="male"
            onGenderChange={(x) => setGender(x)}
          />

          {/* Display the entered values */}
          <p className="text-4xl">
            You entered: {height} cm (Height) and {weight} kg (Weight)
          </p>
          <button
            className="bg-sky-500 hover:bg-sky-400 text-3xl p-5"
            onClick={calculateResult}
          >
            Click to calculate
          </button>
          <div className="text-4xl">
            {result !== null && (
              <p>
                Sum of Height and Weight:{' '}
                {gender === 'male' ? `${result}` : 'Women not allowed'}
              </p>
            )}
          </div>
          <div className="text-5xl">Result- you are fat</div>
        </div>
      </div>
    </div>
  )
}

export default App

// The code without design

// const App: React.FC = () => {
//     // State variables for height and weight
//     const [height, setHeight] = useState('')
//     const [weight, setWeight] = useState('')
//     const [result, setResult] = useState<number | null>(null)

//     // Event handlers for input changes
//     const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       setHeight(e.target.value)
//     }

//     const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       setWeight(e.target.value)
//     }
//     const addHeightWeight = (height: number, weight: number): number => {
//       return height + weight
//     }
//     const calculateResult = () => {
//       const numericHeight = parseFloat(height)
//       const numericWeight = parseFloat(weight)

//       if (!isNaN(numericHeight) && !isNaN(numericWeight)) {
//         const sum = addHeightWeight(numericHeight, numericWeight)
//         setResult(sum)
//       } else {
//         setResult(null)
//       }
//     }

//     return (
//       <div>
//         {/* First input for height */}
//         <div>
//           <label htmlFor="heightInput">Height (in cm): </label>
//           <input
//             type="text"
//             id="heightInput"
//             value={height}
//             onChange={handleHeightChange}
//           />
//         </div>

//         {/* Second input for weight */}
//         <div>
//           <label htmlFor="weightInput">Weight (in kg): </label>
//           <input
//             type="text"
//             id="weightInput"
//             value={weight}
//             onChange={handleWeightChange}
//           />
//         </div>

//         {/* Display the entered values */}
//         <p>
//           You entered: {height} cm (Height) and {weight} kg (Weight)
//         </p>
//         <button className="bg-sky-500 hover:bg-sky-400" onClick={calculateResult}>
//           Click to calculate
//         </button>
//         <div>{result !== null && <p>Sum of Height and Weight: {result}</p>}</div>
//       </div>
//     )
//   }

//   export default App
