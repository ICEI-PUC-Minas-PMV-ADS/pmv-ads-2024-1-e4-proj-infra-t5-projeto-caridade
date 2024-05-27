const organizations = require('./original-organizations-cache');

const fs = require('fs');

const keysToRemove = [
  'addressLine1',
  'addressLine2',
  'ein',
  'postal',
  'state',
  'totalProjects',
  'city',
  'activeProjects',
  'countries',
  'themes',
  'url',
  'mission',
];

const removeFields = () => {
  const filteredOrganizations = organizations.map((org) => {
    keysToRemove.map((key) => {
      delete org[key];
    });

    return org;
  });

  const data = Buffer.from(JSON.stringify(filteredOrganizations)).toString();

  fs.writeFileSync('filteredOrganizations.json', data);

  console.log({ filteredOrganizations, data });
};

removeFields();
