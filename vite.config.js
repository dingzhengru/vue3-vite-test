import { resolve } from 'path';

module.exports = {
  //* 鍵必須以斜線開始和結束(must start and end with a slash)
  alias: {
    '/@/': resolve(__dirname, './src'),
  },
  // proxy: {
  //   '/api': {
  //     target: 'http://api.caza7.re888show.com',
  //     ws: true,
  //     changeOrigin: true,
  //   },
  // },
};
