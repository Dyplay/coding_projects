import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
// Images
import icon from './components/icon.png'
//

const config: DocsThemeConfig = {
  logo: <span>Coding Projects</span>,
  project: {
    link: 'https://github.com/dyplay',
  },
  chat: {
    link: 'https://discord.gg/dyplay',
  },
  docsRepositoryBase: 'https://github.com/dyplay/coding_projects/blob/main',
  footer: {
    text: 'Made with ❤️ by Dyplay 2023© & Next.js Vercel',
  },
}

export default config
