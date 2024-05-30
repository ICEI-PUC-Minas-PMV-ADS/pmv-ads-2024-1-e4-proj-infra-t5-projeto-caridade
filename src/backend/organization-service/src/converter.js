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

  const newOrganizations = formatThemes(filteredOrganizations);

  const data = Buffer.from(JSON.stringify(newOrganizations)).toString();

  fs.writeFileSync('filteredOrganizations.json', data);

  console.log({ newOrganizations, data });
};

const formatThemes = (filteredOrganizations) => {
  const buildThemesArray = (organization) => {
    if (!organization.themes || !organization.themes.theme) return undefined;

    let themes = [];

    // Check if organization.themes.theme is an array
    if (Array.isArray(organization.themes.theme)) {
      themes = organization.themes.theme;
    }
    // If it's not an array, treat it as an object
    else {
      themes.push(organization.themes.theme);
    }

    return themes;
  };

  return filteredOrganizations.reduce((organizations_, organization) => {
    return [
      ...organizations_,
      {
        ...organization,
        themes: buildThemesArray(organization),
      },
    ];
  }, []);
};

removeFields();
