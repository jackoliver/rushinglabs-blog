import { MDXRemote } from 'next-mdx-remote';
import Layout from '../../../components/layout';
import Head from 'next/head';
import Date from '../../../components/date';
import { getAllPostIds, getPostData } from '../../../lib/posts'; //  '../../../../lib/posts';
import utilStyles from '../../../styles/utils.module.css';
import postStyles from '../../../styles/post.module.css';

/**
 * Importing the components which will be used in our MDX posts
 */
import Link from 'next/link';
import Image from 'next/image';
import CenteredImage from '../../../components/content-helpers/CenteredImage';
import Button from '../../../components/button';
import { docco, a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter';
import TikTok from '../../../components/embeds/tiktok';
import { H2, H3, H4 } from '../../../components/content-helpers/anchors';

const MyHighlighter = ({ language, children }) => {
    return (
        <SyntaxHighlighter language={language} style={a11yDark}>
            {children}
        </SyntaxHighlighter>
    );
}


/**
 * getStaticPaths is required by Next.js
 * 
 * See: https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
 */
export async function getStaticPaths() {
    const paths = getAllPostIds();

    // The params building happens in /lib/posts.getAllPostIds()
    return {
        paths: paths,
        fallback: false
    }
}

/**
 * getStaticProps is required by Next.js
 * 
 * See: https://nextjs.org/docs/basic-features/data-fetching
 */
export const getStaticProps = async ({ params }) => {
    // `params` contains the router parameters for pages using dynamic routes
    // For this route we have the directory structure /blog/[year]/[id].js
    // --> So, `year` and `id` are part of the params object <--
    
    const postId = params.id;
    const year = params.year;
    const postData = await getPostData(year, postId);

    return {
        props: {
            postData
        }
    }
}

const Post = (props) => {
    let mdx = props.postData.mdxSource;
    let title = props.postData.title;
    let date = props.postData.date;
    let section = props.postData.section;

    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            
            <article className={postStyles.content}>
                <h1 className={utilStyles.headingX1}>{title}</h1>
                <Date dateString={date} />
                <MDXRemote {...mdx} components={{ 
                    h2: H2,
                    h3: H3,
                    h4: H4,
                    Button, 
                    Image, 
                    Link, 
                    CenteredImage, 
                    SyntaxHighlighter, 
                    MyHighlighter,
                    TikTok                    
                }} />
            </article>
        </Layout>
    );
}

export default Post;