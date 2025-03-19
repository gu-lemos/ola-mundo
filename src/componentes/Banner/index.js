import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={StyleSheet.titulo}>
                    Olá. Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu projetinho React! Eu sou Gustavo Lemos, estudante de front-end da Alura.
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    src={circuloColorido} 
                    className={styles.circuloColorido} 
                    aria-hidden={true}
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto do Gustavo'
                />
            </div>
        </div>
    )
}