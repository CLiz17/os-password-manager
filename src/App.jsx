import { useState } from 'react'
import { Flowbite } from 'flowbite-react'
import { Button } from 'flowbite-react'
import { Label } from 'flowbite-react' 
import { TextInput } from 'flowbite-react'
import PasswordGenerator from './PasswordGenerator'

function App() {
  const [ website, setWebsite ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ card, setCard] = useState([]);

  console.log(website);
  console.log(password);

  useEffect(() => {
    getCard();
  }, [])
  
  async function getcard() {
    try {
      const { data, error } = await supabase
        .from("card")
        .select("*")
        .limit(10)
      if (error) throw error;
      if (data != null) {
        setcard(data); // [product1,product2,product3]
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function createCard() {
    try {
      const { data, error } = await supabase
        .from("card")
        .insert({
          website: website,
          password: password
        })
        .single()
        
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  console.log(card);

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
          onChange={(e) => setWebiste(e.target.value)}
          required={true}/>
      </div>
      
      <div className="m-4 block">
        <Label
          htmlFor="password"
          value="password" />
        <TextInput
          id="password"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required={true}/>
      </div>
      
      <div className="m-4">
        <PasswordGenerator></PasswordGenerator>
        <Button  onClick={() => createProduct()} className="mt-4" color="success">Save</Button>
      </div>
      <h3>Current Database Password</h3>
        <Row>
          {card.map((card) => (
            <Col>
              <PasswordCard card={card} /> {}
            </Col>
          ))}
        </Row>
    </div>
  )
}
export default App