import Child from "./components/Child";
import './App.css'
import { ThemeProvider } from "./store/Themes";


function App() {

  return (
    <ThemeProvider>
      <Child />
    </ThemeProvider>
  )
}

export default App
