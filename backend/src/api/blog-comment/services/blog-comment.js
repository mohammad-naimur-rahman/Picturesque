'use strict';

/**
 * blog-comment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-comment.blog-comment');
