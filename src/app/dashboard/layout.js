"use client"
import { useRouter } from 'next/navigation';


const layout = ({children}) => {
 const route=useRouter()

    const setting=()=>{
    route.push("/dashboard/settings")
    }

    const home = ()=>{
        route.push("/")
    }
  return (
    <div>
      {children}
      <button onClick={home}>home</button>
      <button onClick={setting}>setting</button>
    </div>
  )
}

export default layout
