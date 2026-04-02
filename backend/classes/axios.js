const axios = require("axios");
const https = require('https');

const agent = new https.Agent({
  rejectUnauthorized: (process.env.REJECT_SELF_SIGNED_CERTIFICATES || 'true').toLowerCase() === 'true'
});

// Bun has built-in DNS caching; cacheable-lookup only works with Node.js
if (!globalThis.Bun) {
  const CacheableLookup = require('cacheable-lookup');
  const cacheable = new CacheableLookup();
  cacheable.install(agent);
}

const axios_instance = axios.create({
  httpsAgent: agent
});

module.exports =
{
  axios: axios_instance
};
