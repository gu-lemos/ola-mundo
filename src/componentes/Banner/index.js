import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={StyleSheet.titulo}>
                    Bem-vindo!
                </h1>

                <p className={styles.paragrafo}>
                    Desenvolvi este projeto utilizando React Router para gerenciar a navegação de forma eficiente e fluida. A ideia foi criar uma estrutura de rotas declarativas, permitindo a transição entre páginas sem recarregar a aplicação.
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    src={circuloColorido} 
                    className={styles.circuloColorido} 
                    aria-hidden={true}
                    alt='circulo colorido'
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