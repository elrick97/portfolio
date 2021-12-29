import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { RoughNotation } from 'react-rough-notation'
import {FiTwitter, FiLinkedin, FiGithub} from 'react-icons/fi'
import {SiDevdotto} from 'react-icons/si'
import {TiDocumentText} from 'react-icons/ti'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
          <p><RoughNotation type="highlight" show={true} color='#F59E0B' strokeWidth='5px' animationDuration='2000' animationDelay='1000'>Software Engineer</RoughNotation> - Class 2021</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <p>WIP</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Experience</h2>
        <Link href='/experience'>Here a link to my experience</Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Links</h2>
        <p><Link href='https://dev.to/elrick97'>Dev.to Blog </Link><SiDevdotto/></p>
        <p><Link href='https://github.com/elrick97'>Github </Link><FiGithub/></p>
        <p><Link href='https://twitter.com/elrickrmz'>Twitter </Link><FiTwitter/></p>
        <p><Link href='https://www.linkedin.com/in/rgra97/'>Linkedin </Link><FiLinkedin/></p>
        <p><Link href='https://drive.google.com/file/d/1TO9qBmFRTeKkihY-1MJ0_DGRPjo2yEYC/view?usp=sharing'>Resume </Link><TiDocumentText/></p>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
