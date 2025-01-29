import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import unocss from 'unocss/astro'

import mdx from '@astrojs/mdx'

import remarkMermaid from 'remark-mermaidjs'

import preact from '@astrojs/preact'

export default defineConfig({
  site: 'https://leungsekyu.com/',
  integrations: [sitemap(), unocss({ injectReset: true }), mdx(), preact()],
  vite: {
    resolve: {
      alias: {
        '@icons': '/public/icons',
      },
    },
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
  markdown: {
    remarkPlugins: [
      [
        remarkMermaid,
        {
          mermaidConfig: {
            look: 'handDrawn',
            fontFamily: '"PingFang SC", "Microsoft YaHei", sans-serif',
          },
        },
      ],
    ],
  },
})
