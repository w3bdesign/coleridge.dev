import Navbar from '@/components/Nav'
import Head from 'next/head'

export default function Home() {
    return (
       <div>
        <Head>
            <title>Kai Coleridge</title>
            <meta name="description" content="Kai Coleridge's Portfolio" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <Navbar />
        </main>
       </div>
    )

}
