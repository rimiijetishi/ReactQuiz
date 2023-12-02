import logo from '../assets/quiz-logo.png'
import '../style/Header.css'

export default function Header() {
  return (
    <header>
      <img src={logo} alt='logo'/>
      <h1>ReactQuiz</h1>
    </header>
  )
}