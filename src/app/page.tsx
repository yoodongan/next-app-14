import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './components/NavBar'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <NavBar/>
      <h1>Hello World!</h1>
      <Link href="/users">Here is Users!!</Link>
      
    </main>
  )
}
