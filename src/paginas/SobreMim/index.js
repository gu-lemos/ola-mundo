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
                Olá! Meu nome é Gustavo Lemos, tenho 22 anos e sou formado em Sistemas de Informação pela FIAP. Sou programador full-stack, atuando principalmente com .NET no back-end e React.js no front-end.
            </p>

            <p className={styles.paragrafo}>
                Sou apaixonado por tecnologia e estou sempre buscando aprimorar minhas habilidades. Atualmente, estudo na Alura para aprofundar meus conhecimentos e explorar novas ferramentas que possam agregar ao meu dia a dia como desenvolvedor.
            </p>

            <p className={styles.paragrafo}>
                Acredito que escrever código vai além de simplesmente desenvolver funcionalidades. Para mim, é sobre criar soluções eficientes, escaláveis e de fácil manutenção. Gosto de desafios e estou sempre disposto a aprender algo novo.
            </p>
            
            <p className={styles.paragrafo}> A cada linha de código, uma nova oportunidade de criar, inovar e evoluir! 🚀 </p>

        </PostModelo>
    )
}