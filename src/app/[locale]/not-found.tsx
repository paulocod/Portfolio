import Head from "next/head"
import Link from "next/link"

const NotFound = () => {
    return (
        <>
        <Head>
            <title> 404 | Paulo Campos</title>
        </Head>
            <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-2xl mb-8">Página não encontrada</p>
                <Link className="text-orange-500 underline" href="/">
                    Voltar para a página inicial
                </Link>
            </div>
        </>
    )
}

export default NotFound