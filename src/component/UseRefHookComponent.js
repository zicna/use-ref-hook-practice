import React, {useState} from "react"

const UseRefHookComponent = () => {

    const [name, setName] = useState("")
    const handleInput = (event ) => setName(event.target.value)

  return (
    <div>
      Hello from component{' '}
      <div>
        <input type="text" onChange={handleInput}/>
        <span>My name is: {name}</span>
      </div>
    </div>
  )
}

export default UseRefHookComponent
