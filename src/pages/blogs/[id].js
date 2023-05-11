// "use client"
import axios from "axios";

export default function Blog({ blog }) {
    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{blog.attributes.title}</h1>
            <p>{blog.attributes.content}</p>
        </div>
    );
}

export const getStaticPaths = async () => {
    const r = await axios.get(`${process.env.STRAPI_URL}/api/blogs`);
    const paths = r.data?.data.map((d) => {
        return {
            params: { id: d.id.toString() },
        };
    });

    return {
        paths: paths,
        fallback: true,
    };
};

export const getStaticProps = async ({ params }) => {
    const r = await axios.get(`${process.env.STRAPI_URL}/api/blogs/` + params.id);
    if (!r.data) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            blog: r.data.data,
        },
        revalidate: 1,
    };
};