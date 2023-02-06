import { Navbar } from "./components/Navbar/Navbar"
import "./app.css"
import { SimpleText } from "./components/SimpleText/SimpleText"
import { InputText } from "./components/InputText/InputText"
import { Info } from "./components/Info/Info"
import { SocialMedia } from "./components/SocialMedia/SocialMedia"

function App() {
  
  return (
    <div className="App">
      <Navbar /> 
      <div className="Content">
          <SimpleText />
          <InputText /> 
      </div>
      <div className="footer">
        <Info />
        <hr style={{border: "1px solid #25293D", width: "100%"}} />
        <SocialMedia />
      </div>      
    </div>
  )
}

export default App
