const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        <url>
            <loc>https://www.harrsh.com/</loc>
            <lastmod>2022-08-29T10:01:58+00:00</lastmod>
            <priority>1.00</priority>
        </url>
        <url>
            <loc>https://www.harrsh.com/resume.pdf</loc>
            <lastmod>2022-08-29T10:01:58+00:00</lastmod>
            <priority>0.80</priority>
        </url>
    </urlset>`;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {}
    };
};

export default Sitemap;
