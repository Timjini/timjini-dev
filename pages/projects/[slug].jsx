import { GraphQLClient, gql } from 'graphql-request';
import Link from 'next/link';
import styles from '../../styles/Slug.module.css';
import { motion  } from "framer-motion"
import { useScroll } from "framer-motion"
import { useSpring } from "framer-motion"
import Contact from '../../components/Contact';
import CTA from '../../components/CTA';

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
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

    return (
        <>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <section className="">
         <div className='flex justify-center items-center h-full flex-wrap bg-gray-100 p-12 bg-gradient-to-r from-gray-200 to-green-400'>
        <Link href='/' className='hover:text-green-300'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white hover:text-green-400 mr-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </Link>
            <div className='mx-auto  text-center lg:mx-0 '>
                <h1 className='text-3xl font-bold sm:text-4xl text-white'>{project.title}</h1>
            </div>
         </div>
            <div className='flex justify-center items-center h-full flex-wrap p-10'>
                <div dangerouslySetInnerHTML={{ __html: project.content.html }} className={styles.content}/>
            </div>
        
        </section>
        <CTA />
        </>

    );
}


