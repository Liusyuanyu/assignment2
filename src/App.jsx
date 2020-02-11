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
        return (
            <div>{subhead}</div>
        );
    }
}

const initialProducts = [
    {
      id: 1, name: 'Blue Shirt',price: '$16.99', category: 'Shirts', image_url: 'View',
    },
    {
        id: 2, name: 'Logo Hat',price: '$12.99', category: 'Accessories', image_url: 'View',
    },
  ];


function ProductRow(props) {
    const product = props.product;
    return (
      <tr>
        <td id='body_pro_id'>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.category}</td>
        <td><a href={product.image_url} target="_blank">View</a></td>
      </tr>
    );
}

function ProductTable(props) {
    const productRows = props.products.map(product =>
      <ProductRow key={product.id} product={product} />
    );
    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th id='head_pro_id'>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {productRows}
        </tbody>
      </table>
    );
  }


class MyProductList extends  React.Component{
    constructor() {
        super();
        this.state = { products: initialProducts };
        // this.createIssue = this.createIssue.bind(this);
      }

    render(){
        const head = "My Company Inventory";
        const addhead = "Add a new product to inventory";
        return(
            <React.Fragment>
                <h1>{head}</h1>
                <InventorySubhead/>
                <hr/>
                <ProductTable products={this.state.products}/>
                <label>{addhead}</label>
                <hr/>
                {/* ProductAdd */}
            </React.Fragment>
        )
    }
}

const element =<MyProductList/>;
ReactDOM.render(element, document.getElementById('contents'));