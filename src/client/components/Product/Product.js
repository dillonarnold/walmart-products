import React from 'react';
import PropTypes from 'react-proptypes';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const propTypes = {
  /** Walmart product */
  product: PropTypes.shape({
    /** Id of the product */
    itemId: PropTypes.number,
    /** Name of the product */
    name: PropTypes.string,
    /** The medium image src of the product */
    mediumImage: PropTypes.string
  }).isRequired
};

/**
 * Displays a single Walmart product.
 *
 * @version 1.0.0
 * @author Dillon Arnold
 */
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
