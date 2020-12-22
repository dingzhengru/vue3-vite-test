# vue3-vite-test

測試 vue 3 的功能、測試 vite

vite create project

```
npm init vite-app <project-name>
cd <project-name>
npm install
npm run dev
```

vue-router, vuex

```
npm install vue-router@4 --save
npm install vuex@next --save
```

## vite

## vite.config

### alias

鍵必須以斜線開始和結束

```js
module.exports = {
  alias: {
    '/@/': resolve(__dirname, './src'),
  },
};
```

### proxy

```js
module.exports = {
  proxy: {
    '/api': {
      target: 'http://api.caza7.re888show.com',
      ws: true,
      changeOrigin: true,
    },
  },
};
```
