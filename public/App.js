// class MyProfile extends  React.Component{
//     render(){
//         const name = "Hsuan Yu, Liu";
//         const headshot = "/hsuan.jpg";
//         return(
//             <div>
//                 <div id="name" title="My Name">{name}</div>
//                 <img id="headshot" alt="headshot" src={headshot} accessKey="img"/>
//                 <div id="introduction" title="My Introduction">I am currently a graduate student in Computer Science at San Diego state University. I have token Machine Learning, Data mining, and Big data classes, etc. My skills include python, C#, and Java. Moreover, I was a software engineer for three years, and a data scientist intern for two months.</div>
//                 <a href='https://github.com/Liusyuanyu/CS648FullStackWebDevelopment.git'><button id="github">VIEW MY GITHUB REPO</button></a>
//             </div>
//         )
//     }
// }
// const element =<MyProfile/>;
class InventorySubhead extends React.Component {
  render() {
    const subhead = "Showing all available products";
    return React.createElement("div", null, subhead);
  }

}

const initialProducts = [{
  id: 1,
  name: 'Blue Shirt',
  price: '16.99',
  category: 'Shirts',
  image_url: 'https://images.app.goo.gl/A1VVdgNYDBFprrow5'
}, {
  id: 2,
  name: 'Logo Hat',
  price: '12.99',
  category: 'Accessories',
  image_url: 'https://images.app.goo.gl/bBjLavbRvs7DJtpu8'
}, {
  id: 3,
  name: 'Regular Fit Jeans',
  price: '34.99',
  category: 'Jeans',
  image_url: 'https://images.app.goo.gl/ALG2aDEKpPxGV9137'
}];

function ProductRow(props) {
  const product = props.product;
  return React.createElement("tr", null, React.createElement("td", {
    id: "body_pro_id"
  }, product.id), React.createElement("td", null, product.name), React.createElement("td", null, '$' + product.price), React.createElement("td", null, product.category), React.createElement("td", null, React.createElement("a", {
    href: product.image_url,
    target: "_blank"
  }, "View")));
}

function ProductTable(props) {
  const productRows = props.products.map(product => React.createElement(ProductRow, {
    key: product.id,
    product: product
  }));
  return React.createElement("table", {
    className: "bordered-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
    id: "head_pro_id"
  }, "ID"), React.createElement("th", null, "Name"), React.createElement("th", null, "Price"), React.createElement("th", null, "Category"), React.createElement("th", null, "Image"))), React.createElement("tbody", null, productRows));
}

class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAdd;
    var price = form.priceper.value;
    price = price.replace('$', ''); // alert(price);

    const product = {
      name: form.name.value,
      category: form.category.value,
      price: price,
      image_url: form.image_url.value
    };
    this.props.createProduct(product); // form.category.selectedIndex  = -1;
    // form.priceper.value = "$";
    // form.name.value = "";
    // form.image_url.value = "";

    form.reset();
  }

  render() {
    return React.createElement("form", {
      name: "productAdd",
      onSubmit: this.handleSubmit
    }, React.createElement("div", {
      class: "grid_container"
    }, React.createElement("div", null, React.createElement("label", null, "Category"), React.createElement("br", null), React.createElement("select", {
      type: "text",
      name: "category",
      selectedIndex: 0
    }, React.createElement("option", {
      value: "Shirts"
    }, "Shirts"), React.createElement("option", {
      value: "Jeans"
    }, "Jeans"), React.createElement("option", {
      value: "Jackets"
    }, "Jackets"), React.createElement("option", {
      value: "Sweaters"
    }, "Sweaters"), React.createElement("option", {
      value: "Accessories"
    }, "Accessories"))), React.createElement("div", null, React.createElement("label", null, "Price Per Unit"), React.createElement("br", null), React.createElement("input", {
      type: "text",
      name: "priceper",
      defaultValue: '$'
    })), React.createElement("div", null, React.createElement("label", null, "Product Name"), React.createElement("br", null), React.createElement("input", {
      type: "text",
      name: "name"
    })), React.createElement("div", null, React.createElement("label", null, "Image URL"), React.createElement("br", null), React.createElement("input", {
      type: "text",
      name: "image_url"
    }))), React.createElement("br", null), React.createElement("button", null, "Add Product"));
  }

}

class MyProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    this.createProduct = this.createProduct.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState({
      products: initialProducts
    });
  }

  createProduct(product) {
    product.id = this.state.products.length + 1;
    const newProductList = this.state.products.slice();
    newProductList.push(product);
    this.setState({
      products: newProductList
    });
  }

  render() {
    const head = "My Company Inventory";
    const addhead = "Add a new product to inventory";
    return React.createElement(React.Fragment, null, React.createElement("h1", null, head), React.createElement(InventorySubhead, null), React.createElement("hr", null), React.createElement("br", null), React.createElement(ProductTable, {
      products: this.state.products
    }), React.createElement("br", null), React.createElement("label", null, addhead), React.createElement("hr", null), React.createElement(ProductAdd, {
      createProduct: this.createProduct
    }));
  }

}

const element = React.createElement(MyProductList, null);
ReactDOM.render(element, document.getElementById('contents'));