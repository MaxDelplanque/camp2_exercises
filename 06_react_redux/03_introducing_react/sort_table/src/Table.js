import React, { Component } from 'react';
import './Table.css';
import Row from './Row.js'
import _ from "underscore";


const products =
[
  { "decathlon_id": 8282689, "title": "Corne chasse 14cm", "price": 9.99 },
  { "decathlon_id": 8354464, "title": "Basic L print Long Gold Fusion", "price": 9.99 },
  { "decathlon_id": 8380024, "title": "RUN ELIOPRIME", "price": 54.99 },
  { "decathlon_id": 8379970, "title": "Pantalon Gym", "price": 12.99 },
  { "decathlon_id": 8247793, "title": "PALMES WADERS", "price": 24.99 },
  { "decathlon_id": 8357549, "title": "MINIMIZER EDEN UNI  NOIR", "price": 19.99 },
  { "decathlon_id": 8326155, "title": "Pantalon Training mesh marine", "price": 44.99 },
  { "decathlon_id": 8329121, "title": "COUTEAU A PALOURDES", "price": 4.99 },
  { "decathlon_id": 8370749, "title": "Doudoune Hike 100 garçon bleu", "price": 9.99 },
  { "decathlon_id": 8298354, "title": "OREILLER CONFORT", "price": 6.99 },
  { "decathlon_id": 8044622, "title": "2 guêtres RIDING noir", "price": 14.99 },
  { "decathlon_id": 8249674, "title": "BOBINE FUN 2 3 4mm X 40 20 12m", "price": 6.99 },
  { "decathlon_id": 8353265, "title": "Justaucorps manche longue Gym.", "price": 34.99 }
];


class Table extends Component {

  // constructor du composant : initialisation d'un state contenant un objet "products"
  constructor(props) {
    super(props)
    this.state = {products: products, sort:'asc'}
  }

  // tri du tableau par colonne, en parametre : la colonne à trier
  sort( column ){
    // console.log('tri par : '+column);
    let sortedProducts = this.state.products;

    if (this.state.sort === 'asc'){
      // console.log('asc');
      sortedProducts = _.sortBy(this.state.products, column);
      this.setState({ sort : 'desc' });
    } else if (this.state.sort === 'desc') {
      // console.log('desc');
      sortedProducts = _.sortBy(this.state.products, column).reverse();
      this.setState({ sort : 'asc' });
    }

    this.setState({ products : sortedProducts })
  }

  render() {
    return (
      <div className="Table">
        <h1 id="title">My table !</h1>
        <table className="table table-striped table-bordered table-sm">
          <thead className="thead-dark">
            <tr>
              <th onClick={this.sort.bind(this, 'decathlon_id')}>Code</th>
              <th onClick={this.sort.bind(this, 'title')}>Title</th>
              <th id = "headerPrice" onClick={this.sort.bind(this, 'price')}>Price</th>
            </tr>
          </thead>

          <tbody>
            { this.state.products.map( product => <Row key={product.decathlon_id} product={product} />) }
          </tbody>

        </table>
      </div>
    )
  }
}



export default Table;
