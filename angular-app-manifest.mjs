
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5150, hash: '1cc0ee7a688e5513f6f04646e6b4ed6f9346a05fdade5959dc36a61a1d8a4eda', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: '6c8d58367d4b20efc7d7cfa35d37e05ce28017b0db68103f80d73d93b90a0d55', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 75881, hash: '2486389a166a0f06e37f23e1c7316359f712cc842834608bee6e39985129bf47', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3RAWGBYP.css': {size: 231072, hash: 'Tiat6D2+TAA', text: () => import('./assets-chunks/styles-3RAWGBYP_css.mjs').then(m => m.default)}
  },
};
