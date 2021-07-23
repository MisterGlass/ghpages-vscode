module.exports = {
  ci: {
    collect: {
      staticDistDir: './_site',
      maxAutodiscoverUrls: 1000,
    },
    upload: {
      token: process.env.LHCI_GITHUB_APP_TOKEN,
      target: 'temporary-public-storage',
    },
  },
};
