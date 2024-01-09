// GenderToggle.tsx
import React, { useState } from 'react'

interface GenderToggleProps {
  initialGender: 'male' | 'female'
  onGenderChange: (gender: 'male' | 'female') => void
}

const GenderToggle: React.FC<GenderToggleProps> = ({
  initialGender,
  onGenderChange
}) => {
  const [gender, setGender] = useState<'male' | 'female'>(initialGender)

  const handleToggle = () => {
    const newGender = gender === 'male' ? 'female' : 'male'
    setGender(newGender)
    onGenderChange(newGender)
  }

  return (
    <div>
      <p>Selected Gender: {gender}</p>
      <button onClick={handleToggle}>Toggle Gender</button>
    </div>
  )
}

export default GenderToggle
