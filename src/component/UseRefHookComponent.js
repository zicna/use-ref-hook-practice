import React, { useState, useEffect } from 'react'
import { useRef } from 'react'

const UseRefHookComponent = () => {
  const [name, setName] = useState('')
  //   *1. storing value between render cycles without causing component to re-render
  const renderCount = useRef(1)
  //   * 2. reference HTML elements
  const inputRef = useRef('')
  //   * 3. previous value of the state
  const previousName = useRef('')

  useEffect(
    () => {
      previousName.current = name
    },
    [name]
  )

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  const handleInput = (event) => setName(event.target.value)

  const handleButtonClick = () => {
    console.log(inputRef)
    inputRef.current.focus()
  }

  return (
    <div>
      Hello from component
      <div>
        <input ref={inputRef} type="text" onChange={handleInput} />
        <span>My name is: {name}</span>
        <button onClick={handleButtonClick}>FOCUS</button>
      </div>
      <div>My name used to be {previousName.current} </div>
      <div>I render {renderCount.current} times</div>
    </div>
  )
}

export default UseRefHookComponent
