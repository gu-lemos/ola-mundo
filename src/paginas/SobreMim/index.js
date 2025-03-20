import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Gustavo!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Gustavo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className={styles.paragrafo}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className={styles.paragrafo}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
            </p>
            <p className={styles.paragrafo}>
                Pellentesque in libero id felis ultrices scelerisque. Proin venenatis magna in lorem consequat, eget facilisis lectus suscipit.
            </p>
            <p className={styles.paragrafo}>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer eu neque id velit convallis interdum.
            </p>
            <p className={styles.paragrafo}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>

        </PostModelo>
    )
}