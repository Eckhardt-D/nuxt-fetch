export default (_, inject) => {
  const options = <%= JSON.stringify(options) %>

  const baseURL = options.baseURL
  const fetch = process.server
    ? (...args) => baseURL && !args[0].match(/^https?:\/\//) ? require("node-fetch")(`${baseURL}${args[0].slice(1)}`, args.slice(1)) : require('node-fetch')(...args)
    : typeof window !== "undefined"
    ? (...args) =>  window.fetch(...args)
    : null;

  inject("fetcher", fetch);
};
