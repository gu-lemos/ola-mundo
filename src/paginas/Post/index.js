import { useParams } from "react-router-dom"
import posts from 'json/posts.json';
import PostModelo from "componentes/PostModelo";
import ReactMarkDown from "react-markdown";
import './Post.css';

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    });

    if (!post) {
        return <h1>Post não encontrado</h1>
    }

    return (
        <PostModelo
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkDown>
                    {post.texto}
                </ReactMarkDown>
            </div>
        </PostModelo>
    )
}