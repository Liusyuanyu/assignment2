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
  price: '$16.99',
  category: 'Shirts',
  image_url: 'View'
}, {
  id: 2,
  name: 'Logo Hat',
  price: '$12.99',
  category: 'Accessories',
  image_url: 'View'
}];

function ProductRow(props) {
  const product = props.product;
  return React.createElement("tr", null, React.createElement("td", {
    id: "body_pro_id"
  }, product.id), React.createElement("td", null, product.name), React.createElement("td", null, product.price), React.createElement("td", null, product.category), React.createElement("td", null, React.createElement("a", {
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

class MyProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: initialProducts
    }; // this.createIssue = this.createIssue.bind(this);
  }

  render() {
    const head = "My Company Inventory";
    const addhead = "Add a new product to inventory";
    return React.createElement(React.Fragment, null, React.createElement("h1", null, head), React.createElement(InventorySubhead, null), React.createElement("hr", null), React.createElement(ProductTable, {
      products: this.state.products
    }), React.createElement("label", null, addhead), React.createElement("hr", null));
  }

}

const element = React.createElement(MyProductList, null);
ReactDOM.render(element, document.getElementById('contents'));