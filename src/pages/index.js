/*
 * @Author: onmyoji onmyoji@qq.com
 * @Date: 2023-03-21 14:28:02
 * @LastEditors: onmyoji onmyoji@qq.com
 * @LastEditTime: 2023-05-21 16:04:17
 * @FilePath: \nahida-cn\src\pages\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro/">
            看点其他的吧
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`欢迎来到 ${siteConfig.title}`}
      description="纳西妲世界第一可爱 <head />">
      <HomepageHeader />
      <main>
      <img src='https://upload-bbs.miyoushe.com/upload/2022/11/02/277577469/14dc5c8285def7cc3d2eae3ebd818484_4346285420607794492.jpg' style={{width:'100%'}}></img>
      <img src='http://img.up.cdn.nahida.cn/nahida/bg1.png' style={{width:'100%'}}></img>
      </main>
    </Layout>
  );
}
