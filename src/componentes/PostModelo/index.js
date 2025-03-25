import PostCard from 'componentes/PostCard';
import styles from './PostModelo.module.css';

export default function PostModelo({ children, fotoCapa, titulo, outrosPosts }) {
    return (
        <>
            <article className={styles.postModeloContainer}>
                <div
                    className={styles.fotoCapa}
                    style={{ backgroundImage: `url(${fotoCapa})` }}
                ></div>

                <h2 className={styles.titulo}>
                    {titulo}
                </h2>

                <div className={styles.postConteudoContainer}>
                    {children}
                </div>
            </article>

           {outrosPosts && outrosPosts.length > 0 && (
                <div className={styles.outrosPostsContainer}>
                    <h2 className={styles.outrosPostsTitulo}>Outros posts que você pode gostar:</h2>
                    <ul className={styles.listaOutrosPosts}>
                        {outrosPosts.map((outroPost) => (
                            <li key={outroPost.id}>
                                <PostCard post={outroPost} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}