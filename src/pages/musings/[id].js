import Head from "next/head";
import Layout from "@/components/Layout";
import { getAllMusingIds, getMusingData } from "../../../lib/musings";
import AnimatedText from "@/components/AnimatedText";
import Date from "@/components/Date";
import 'github-markdown-css/github-markdown.css';

export async function getStaticPaths() {
    const paths = getAllMusingIds();
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const musingData = await getMusingData(params.id);
    return {
        props: {
            musingData
        }
    };
}

export default function Musing({ musingData }) {
    return (
        <>
            <Head>
                <title>{musingData.title}</title>
                <meta name="description" content={musingData.summary}></meta>
            </Head>
            <Layout>
                <AnimatedText text={musingData.title} className="mb-12 mt-[-px] lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8" />
                <div className="flex flex-col items-center justify-center w-full">
                    <Date dateString={musingData.date} />
                    <p className="mt-10 text-xl text-dark/75 dark:text-light/75">{musingData.readTime}</p>
                </div>
                <div className="markdown-body mt-12 text-dark dark:text-light" dangerouslySetInnerHTML={{ __html: musingData.contentHtml }} />
            </Layout>
        </> 
    )
}