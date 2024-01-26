import Vishnu from './Vishnu'
import './App.css'
import Navbar from './Navbar' 


function App() {
  const username ="vishnu ji"
  

  return (
    <> 
    <Vishnu/>
    
      <h1>Hello react! <p>{username} 
        </p></h1>
      <Navbar/>
      
    </>
  )
}

export default App
