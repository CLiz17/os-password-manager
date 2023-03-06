import { useState } from 'react'
import { Flowbite } from 'flowbite-react'
import { Button } from 'flowbite-react'
import { Label } from 'flowbite-react' 
import { TextInput } from 'flowbite-react'
import PasswordGenerator from './PasswordGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2 class="text-4xl text-center">Password Management App</h2>
      <h2 class="text-2xl m-2">Add Password</h2>

      <div className="m-4 block">
        <Label
          htmlFor="link"
          value="Website Url Link" />
        <TextInput
          id="website-url"
          type="website-url"
          placeholder="Website url"
          required={true}/>
      </div>

      <div className="m-4 block">
        <Label
          htmlFor="username"
          value="Username" />
        <TextInput
          id="username"
          type="username"
          placeholder="Username"
          required={true}/>
      </div>

      <div className="m-4">
        <PasswordGenerator></PasswordGenerator>
        <Button className="mt-4" color="success">Save</Button>
      </div>
    </div>
  )
}
export default App