import path from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import { TDesignResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { ConfigEnv, loadEnv, UserConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const CWD = process.cwd()

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const { VITE_BASE_URL, VITE_API_URL_PREFIX } = loadEnv(mode, CWD)
  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      vue(),
      /** TD 按需引入 */
      AutoImport({
        resolvers: [
          TDesignResolver({
            library: 'vue-next',
          }),
        ],
      }),
      Components({
        resolvers: [
          TDesignResolver({
            library: 'vue-next',
          }),
        ],
      }),
      svgLoader(),
      vueJsx(),
    ],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${path.resolve('src/style/variables.less')}";`,
          },
          math: 'strict',
          javascriptEnabled: true,
        },
      },
    },

    server: {
      port: 3000,
      host: '0.0.0.0',
      // proxy: {
      //   [VITE_API_URL_PREFIX]: {
      //     target: '',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/\/api/, ''),
      //     bypass(req, res, options: any) {
      //       const proxyURL = options.target + options.rewrite(req.url)
      //       res.setHeader('x-req-proxyURL', proxyURL) // 设置响应头可以看到
      //     },
      //   },
      // },
    },
  }
}
