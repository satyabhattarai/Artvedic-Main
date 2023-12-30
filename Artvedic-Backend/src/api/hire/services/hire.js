'use strict';

/**
 * hire service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hire.hire');
