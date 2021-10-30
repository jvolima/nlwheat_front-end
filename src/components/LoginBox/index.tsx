import styles from "./styles.module.scss"
import { VscGithub } from "react-icons/vsc"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

export function LoginBox() {
  const { signInUrl } = useContext(AuthContext)

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe a sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithub size="24"/>
        Entrar com GitHub
      </a>
    </div>
  )
}