import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HeroImg from '../../static/img/homepage-bg-main.png'

function MyHero() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <div className={styles.myHeroContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.leftContainer_h1}>
          {siteConfig.tagline.split('.').map((token, index) => <React.Fragment key={index}>
            {token}
            <br />
          </React.Fragment>)}
        </h1>
        <p className={styles.leftContainer_p}>
          { } ✨
          <br />
          记录学习历程
        </p>
      </div>
      <div className={styles.rightContainer}>
        <img src={HeroImg} alt='HeroImg' />
      </div>
    </div>
  )
}
export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main className={styles.indexContainer}>
        <MyHero />
      </main>
    </Layout>
  )
}