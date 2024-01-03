import './App.css'

function App(props){
  const image = props.imageprop;
  console.log(image)

  return(
    <div>
      {
        image.map((element)=>(
          <img src={element.img} id={element.id}/>
        ))
      }
    </div>
  )
}
export default App