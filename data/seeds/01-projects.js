
exports.seed = function (knex) {
  
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, name: 'Build Company Portfolio', description: 'Hire new developers to build new portfolio website for clients' },
        { id: 2, name: 'Attract Investors', description: 'Contract Marketing or PR Firm to assist with new tactics to attract Investors' },
        { id: 3, name: 'Create Partnership Campaign', description: 'Launch Ads to Promote New Partnership with New Investors' }
      ]);
    });
};
