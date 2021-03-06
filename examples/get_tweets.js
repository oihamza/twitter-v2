const Twitter = require('../src/twitter.js');

const credentials = require('./helpers/credentials.js');

async function main() {
  const client = new Twitter(await credentials.fromCommandLine());

  // Tweet Lookup API Reference: https://bit.ly/2QF58Kw
  const { data: tweet } = await client.get('tweets', {
    ids: '1228393702244134912',
    tweet: {
      fields: ['created_at', 'entities', 'public_metrics', 'author_id'],
    },
  });

  console.log(tweet);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
