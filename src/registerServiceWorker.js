/* eslint-disable no-console */

import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log('Service worker 正在緩存準備中...');
    },
    registered() {
      console.log('Service worker 已註冊');
    },
    cached() {
      console.log('APP 內容已緩存可提供離線使用');
    },
    updatefound() {
      console.log('正在下載新的內容');
    },
    updated() {
      console.log('有新的內容可以使用，請重新整理頁面');
    },
    offline() {
      console.log('無法連接網路，將在離線模式下使用');
    },
    error(error) {
      console.error('Service worker 註冊發生錯誤:', error);
    },
  });
}
