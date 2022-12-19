import { GraphQLClient, gql } from 'graphql-request';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import react from '../../public/react-js-icon.svg';
import styles from '../../styles/Home.module.css';

const graphcsm = new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbukk0lj2sh801uk6syyh0f9/master');

const Query = gql`
    query Project($slug: String!) {
        project(where: { slug: $slug }) {
            id
            slug
            title
            excerpt
            image {
                url
            }
            content {
                html
            }
        }
    }
`;

const SLUGLIST = gql`
     {
        projects {
            slug
        }
    }
`;

export async function getStaticPaths() {
    const { projects } = await graphcsm.request(SLUGLIST);
    return {
        paths: projects.map((project) => ({
            params: { slug: project.slug }, 
        })),
        fallback: false,
    };
}


export async function getStaticProps({ params }) {
    const {slug} = params;
    const data = await graphcsm.request(Query, { slug });
    const project = data.project;
    return {
        props: {
            project,
        },
        revalidate: 10,
    };
}

export default function ProjectPage({ project }) {
    return (
        <><Navbar />
        <section className="">
         <div className='flex justify-center items-center h-full flex-wrap bg-gray-100 p-24'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

            <div className='mx-auto  text-center lg:mx-0 '>
                <h1 className='text-3xl font-bold sm:text-4xl text-gray-700'>{project.title}</h1>
            </div>
         </div>
            <div className='flex justify-center items-center h-full flex-wrap p-10'>
                <div dangerouslySetInnerHTML={{ __html: project.content.html }} className={styles.content}/>
            </div>
        
        </section>

        </>

    );
}


