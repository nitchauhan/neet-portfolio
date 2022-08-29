import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        name="google-site-verification"
                        content="Tqj-B_bSqzECheWc3ywpMN84lTT_5_M2Y8ZB0WRgn8U"
                    />
                    <link rel="icon" href="/favicon.ico" />

                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                        crossOrigin="anonymous"
                    />
                    <script
                        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                        crossOrigin="anonymous"
                        async
                    />

                    {/* SEO */}

                    {/* Primary Meta Tags */}
                    <meta name="title" content="Harsh Patel | Full-Stack Web Developer" />
                    <meta
                        name="description"
                        content="Innovative, task-driven professional with 8+ years of experience in web design and development across diverse industries. Equipped with a record of success in consistently identifying and providing the technological needs of companies through ingenious innovation. Proficient in developing databases, creating user interfaces, writing and testing codes, troubleshooting simple/complex issues, and implementing new features based on user feedback."
                    />
                    <meta
                        name="keywords"
                        content="software, developer, programmer, harrsh, harsh, full-stack, web, react, node, mern, express, javascript, database"
                    />
                    <meta name="robots" content="index, follow" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="language" content="English" />
                    <meta name="author" content="Harrsh Patel" />

                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.harrsh.com/" />
                    <meta property="og:title" content="Harsh Patel | Full-Stack Web Developer" />
                    <meta
                        property="og:description"
                        content="Innovative, task-driven professional with 8+ years of experience in web design and development across diverse industries. Equipped with a record of success in consistently identifying and providing the technological needs of companies through ingenious innovation. Proficient in developing databases, creating user interfaces, writing and testing codes, troubleshooting simple/complex issues, and implementing new features based on user feedback."
                    />
                    <meta property="og:image" content="https://www.harrsh.com/MyPhoto.jpg" />

                    {/* Twitter */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://www.harrsh.com/" />
                    <meta
                        property="twitter:title"
                        content="Harsh Patel | Full-Stack Web Developer"
                    />
                    <meta
                        property="twitter:description"
                        content="Innovative, task-driven professional with 8+ years of experience in web design and development across diverse industries. Equipped with a record of success in consistently identifying and providing the technological needs of companies through ingenious innovation. Proficient in developing databases, creating user interfaces, writing and testing codes, troubleshooting simple/complex issues, and implementing new features based on user feedback."
                    />
                    <meta property="twitter:image" content="https://www.harrsh.com/MyPhoto.jpg" />

                    {/* SEO */}
                </Head>
                <body className="dark">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
