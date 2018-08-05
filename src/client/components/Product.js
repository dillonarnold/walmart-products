import React from 'react';
import { shape, string, number } from 'react-proptypes';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const propTypes = {
  product: shape({
    itemId: number,
    name: string,
    mediumImage: string
  }).isRequired
};

const Product = ({product}) => (
  <Card id={`card-${product.itemId}`}>
    <CardContent>
      <Typography id={`cardName-${product.itemId}`} color="h2">
        {product.name}
      </Typography>
      <Typography id={`cardId-${product.itemId}`} color="textSecondary">
        {product.itemId}
      </Typography>
      <img id={`cardImage-${product.itemId}`} src={product.mediumImage} alt={product.name}/>
    </CardContent>
  </Card>
);

Product.propTypes = propTypes;

export default Product;
