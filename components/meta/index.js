import Head from "next/head";

function CommonMeta({title}) {
    return (
        <div>
        <Head>
            <title>{title}</title>
        </Head>
        </div>
    )
}

export default CommonMeta