// ColorLabelField.tsx
import React from 'react'
import { TextField } from '@mui/material'

const ColorLabelField = ({ label, onChange }) => {
  const handleLabelChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <TextField
      value={label}
      onChange={handleLabelChange}
      size="small"
      sx={{
        mb: 0.5,
        width: '100%',
      }}
    />
  )
}

export default ColorLabelField
