import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import MenuIcon from './menu-icon';

const name = 'Rushing Labs';
export const siteTitle = 'Rushing Labs';

export default function Layout({ children, home }) {
    return (
      <div>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Rushing Labs - A place to build things and hangout"
          />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;700&family=Palanquin:wght@100;300&display=swap" rel="stylesheet"></link>
        </Head>

        <header className={styles.header}>
          <MenuIcon />

          <h1 className={utilStyles.heading2Xl}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h1>

          <div className={styles.navbarLinks}>
            <h2>
              <Link href="/blog">
                <a className={utilStyles.colorInherit}>Blog</a>
              </Link>
            </h2>
            <h2>
              <Link href="/projects">
                <a className={utilStyles.colorInherit}>Projects</a>
              </Link>
            </h2>
            <h2>
              <Link href="/docs">
                <a className={utilStyles.colorInherit}>Docs</a>
              </Link>
            </h2>
            <h2>
              <Link href="/about">
                <a className={utilStyles.colorInherit}>About</a>
              </Link>
            </h2>
          </div>
        </header>

        <div className={styles.mainContent}>

          <div className={styles.container}>
            {children}
          </div>

          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}

          <a href="https://plausible.io/rushinglabs.com">RushingLabs - Analytics</a>
        </div>
      </div>
    )
  }