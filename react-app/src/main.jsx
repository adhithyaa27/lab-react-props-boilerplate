
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import data from './components/DataComponent.jsx'

const imgs = data()
console.log(imgs)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App imageprop={imgs}/>

)
