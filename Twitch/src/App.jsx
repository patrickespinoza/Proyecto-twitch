import NavBar from "./componentes/NavBar"
import UserProvider from "./componentes/UserProvider"
import Content from "./componentes/content"


export default function App () {
return(
  <main className="w-full min-h-screen p-4 grid grid-cols-[20%_1fr] grid-rows-[3.2rem_1fr]">
    <NavBar/>
    <UserProvider/>
    <Content/>
    
    
  </main>
)
}


