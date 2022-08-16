import React from 'react'
import NavBar from './components/NavBar'
import Todo from './components/Todo'

function App() {
  
  let title ="my activities to do for the week"
  
  return (
    <div>
    <NavBar title={title} />
    <main>
    <Todo title="learning react" datetime="15th July,2022"/>
    <Todo title="cooking my favorite food" datetime="16th July,2022"/>
    <Todo title="learning at the library" datetime="17th July,2022"/>
    <Todo title="visiting daddy in the village" datetime="18th July,2022"/>
    <Todo title="going to the market" datetime="19th July,2022"/>

    </main>
    </div>
  )
}

export default App