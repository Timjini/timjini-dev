import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import Navbar from '../components/Navbar'
import Frameworks from '../components/Frameworks'
import { GraphQLClient, gql } from 'graphql-request'
import ProjectPost from '../components/ProjectPost'
import Contact from '../components/Contact'

const endpoint = new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbukk0lj2sh801uk6syyh0f9/master');

const Query = 
gql`{
  projects {
    id
    title
    excerpt
    slug
    image {
      url
    }
    stack {
      url 
    }
  }
}
`;

export async function getStaticProps() {
  const {projects} = await endpoint.request(Query);
  return {
    props: {
      projects,
    },
  }
}


export default function Home({projects}) {
  return (
    <>
      <Head>
        <title>TimJini Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Hero />
        <Frameworks />
        <div>
        {projects.map((project) => (
          <ProjectPost 
            key={project.id} 
            title={project.title}
            excerpt={project.excerpt}
            image={project.image}
            slug={project.slug}
            stack={project.stack}

             />
        ))}
        </div>

        <Contact />
      
      </main>
    </>
  )
}
