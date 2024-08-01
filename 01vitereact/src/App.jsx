import Demo from "./Demo"
function App() {
  const username = 'John'

  return (
    <>
    <Demo></Demo>
    <Demo/>
    <p>This is paragraph</p>
    <p>Username: {username}</p>
    </>
  )
}

export default App
