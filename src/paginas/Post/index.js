import { Routes, Route, useParams } from "react-router-dom"
import posts from 'json/posts.json';
import PostModelo from "componentes/PostModelo";
import ReactMarkDown from "react-markdown";
import './Post.css';
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    });

    const outrosPosts = posts.filter((post) => {
        return post.id !== Number(parametros.id)
    });
    
    if (!post) {
        return <NaoEncontrada />
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                    titulo={post.titulo}
                    outrosPosts={outrosPosts}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkDown>
                                {post.texto}
                            </ReactMarkDown>
                        </div>
                    </PostModelo>
                }/>
            </Route>
        </Routes>
    )
}