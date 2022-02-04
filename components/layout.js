import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import styled from '@emotion/styled'

const name = 'Ricardo Ramirez'
export const siteTitle = 'Ricardo Portfolio'

const ToggleButton = styled.button`
  margin-left: auto; 
  margin-right: 0;
  --toggle-width: 80px;
  --toggle-height: 38px;
  --toggle-padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(#1E90FF);
  transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
  },
`;

const ToggleThumb = styled.span`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 1.1));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 1.1));
  border-radius: 50%;
  background: white;
  transition: transform 0.25s ease-in-out;
  transform: ${(p) =>
    p.activeTheme === "dark"
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};
`;

export default function Layout({ children, home }) {
  const {theme, setTheme} = useTheme('dark');
  const {mounted, setMounted} = useState() 

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon2.ico" />
        <meta
          name="description"
          content="Ricardo Ramirez's portfolio"
        />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@elrickrmz"/>
        <meta name="twitter:creator" content="@elrickrmz"/>
        <meta name="twitter:title" content="Discord Bot with Python"/>
        <meta name="twitter:description" content="By the end of this first part, you will have the fundamentals on how to make the bot respond to commands given by the user and have it live on your Discord server."/>
        <meta name="twitter:image" content="https://ricardoramirez.vercel.app/images/discordBotP1/Untitled%203.png"/>
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
           <ToggleButton
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              
            >
              <ToggleThumb activeTheme={theme} />
              <span>🌙</span>
              <span>☀️</span>
            </ToggleButton>
            <h1 className={utilStyles.heading2Xl}><RoughNotation type="underline" show={true} color='#F59E0B' strokeWidth='10px' padding='0px' animationDuration='2000'>{name} </RoughNotation></h1>
          </>
        ) : (
          <>
          <ToggleButton
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              
            >
              <ToggleThumb activeTheme={theme} />
              <span>🌙</span>
              <span>☀️</span>
            </ToggleButton>
            
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
