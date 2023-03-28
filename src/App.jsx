import './App.css'
import { useEffect, useState } from 'react'
import Filter from './components/Filter/Filter'
import Jobs from './components/Jobs/Jobs'

function App() {
  const [ filters, setFilters ] = useState(new Set([]))

  return (
    <div className="App">
      <Filter filters={{setFilters, filters}}/>
      <Jobs state={{setFilters, filters}}/>
    </div>
  )
}

export default App
