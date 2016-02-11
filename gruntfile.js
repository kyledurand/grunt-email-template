module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    includereplace: {
      featured_products: {
        options: {
          globals: {
            product_avatar_1: '',
            product_shop_name_1: '',
            product_image_1: '',
            product_price_1: '',
            product_title_1: '',
            product_url_1: '',

            product_avatar_2: '',
            product_shop_name_2: '',
            product_image_2: '',
            product_price_2: '',
            product_title_2: '',
            product_url_2: ''
          }
        },
        src: 'featured_products.html',
        dest: 'final-templates/',
        expand: true,
        cwd: 'source-templates/'
      },

      featured_shops: {
        options: {
          globals: {
            shop_avatar_1: '',
            shop_name_1: '',
            shop_description_1: '',
            shop_product_image_left_1: '',
            shop_product_image_middle_1: '',
            shop_product_image_right_1: '',
            shop_url_1: '',

            shop_avatar_2: '',
            shop_name_2: '',
            shop_description_2: '',
            shop_product_image_left_2: '',
            shop_product_image_middle_2: '',
            shop_product_image_right_2: '',
            shop_url_2: ''
          }
        },
        src: 'featured_shops.html',
        dest: 'final-templates/',
        expand: true,
        cwd: 'source-templates/'
      },
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['includereplace']);
};
