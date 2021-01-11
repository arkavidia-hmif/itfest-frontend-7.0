const dotenv = require('dotenv');
const withSourceMaps = require('@zeit/next-source-maps')

const { parsed } = dotenv.config({
  path: `./.env.${process.env.DOTENV_FILE || 'development'}`
});

module.exports = withSourceMaps({
  env: {
    API_BASE_URL: parsed.API_BASE_URL,
    LOCAL_STORAGE_AUTHENTICATED: parsed.LOCAL_STORAGE_AUTHENTICATED,
    LOCAL_STORAGE_AUTH: parsed.LOCAL_STORAGE_AUTH,
    GA_ID: parsed.GA_ID || '',
    GA_ENABLED: !!parsed.GA_ID,
    SENTRY_DSN: parsed.SENTRY_DSN || '',
    SENTRY_ENV: parsed.SENTRY_ENV || '',
    SENTRY_ENABLED: !!(parsed.SENTRY_DSN && parsed.SENTRY_ENV)
  },
  basePath: parsed.BASE_PATH || '',
  exportPathMap: (defaultPathMap) => {

    const filteredPathMap = {};
    for (const key in defaultPathMap) {
      if (!key.startsWith('/dashboard')) {
        filteredPathMap[key] = defaultPathMap[key];
      }
    }

    return filteredPathMap;
  }
});