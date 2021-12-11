import React from 'react'
import { useSelector } from 'react-redux'

export default function User() {
  const { name } = useSelector(state => state.user)

  return (
    <div>
      <h1>Usuário: {name}</h1>
    </div>
  )
}
