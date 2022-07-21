import Head from "next/head";

function CommonMeta({title}) {
    return (
        <div>
        <Head>
            <title>{title}</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.15.1/dist/css/uikit.min.css" />
            <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.1/dist/js/uikit.min.js" defer></script>
            <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.1/dist/js/uikit-icons.min.js" defer></script>
        </Head>
        </div>
    )
}

export default CommonMeta