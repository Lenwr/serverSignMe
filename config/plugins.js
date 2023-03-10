module.exports = ({ env }) => ({
  'netlify-deployments': {
    enabled: true,
    config: {
      accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
      sites: [
        {
          name: 'serversignme',
          id: "45df245b-fa84-4136-a3dc-993145f2951a",
          buildHook:
            'https://api.netlify.com/build_hooks/6409e781a061970d7696e528',
          branch: 'main', // optional
        },
      ],
    },
  },
})
