'use strict';

/**
 * artist-profile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::artist-profile.artist-profile');
