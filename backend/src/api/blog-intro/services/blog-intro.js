'use strict';

/**
 * blog-intro service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-intro.blog-intro');
