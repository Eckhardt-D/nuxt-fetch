# Nuxt Fetch

A Nuxt.js module which brings in the Fetch API to both client and server.

## Usage

This module injects the instance method `this.$fetcher` to the Vue instance and is available in context as `$fetcher` on the Nuxt context.

_nuxt.config.js_

```js
module.exports = {
  modules: ["nuxt-fetch"],
};
```

## Example

_pages/index.vue_

```js
export default {
  name: "Home",
  async asyncData({ $fetcher }) {
    const result = await $fetcher("/api/posts/1").then((res) => res.json());
    console.log(result); // { id: 1, title: "Hello world!", description: "..." }
  },
  methods: {
    async postSomething() {
      await this.$fetcher("/api/create/", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: "2",
          title: "New Post",
          description: "...",
        }),
      });
    },
  },
};
```

## Options

By default fetch works with relative URLs on the server too by checking the environment. So you can request something like `/api` everywhere. The following options are currently available:

_nuxt.config.js_

```js
module.exports = {
  // Construct a different baseURL e.g. http://0.0.0.0:5000
  fetch: {
    host: "0.0.0.0",
    port: "5000",
  },
};
```
