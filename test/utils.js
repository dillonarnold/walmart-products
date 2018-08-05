'use strict';
require('babel-polyfill');
const Code = require('code'); // assertion library for Lab
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const { reduceProduct, mapProducts } = require('../src/server/api/utils');

lab.experiment('Util Tests', () => {
  lab.test('reduceProduct test', () => {
    const product = {
      itemId: 1234,
      name: 'iPod',
      upc: '1234',
      price: 149,
      mediumImage: 'imageSrc'
    };

    const reducedProduct = reduceProduct(product);
    Code.expect(reducedProduct).to.equal({
      itemId: 1234,
      name: 'iPod',
      mediumImage: 'imageSrc'
    });
  });

  lab.test('mapProducts test', () => {
    const products = [
      {
        itemId: 1234,
        name: 'iPod',
        upc: '1231afa',
        price: 149,
        mediumImage: 'imageSrc'
      },
      {
        itemId: 1234123,
        name: 'iPod Case',
        upc: '12vs341',
        price: 39,
        mediumImage: 'imageSrc2'
      }
    ];

    const reducedProduct = mapProducts(products);
    Code.expect(reducedProduct).to.equal([
      {
        itemId: 1234,
        name: 'iPod',
        mediumImage: 'imageSrc'
      },
      {
        itemId: 1234123,
        name: 'iPod Case',
        mediumImage: 'imageSrc2'
      }
    ]);
  });
});
