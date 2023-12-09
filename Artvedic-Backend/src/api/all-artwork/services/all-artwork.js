'use strict';

/**
 * all-artwork service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-artwork.all-artwork');
