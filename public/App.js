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

class MyProductList extends React.Component {
  render() {
    const head = "My Company Inventory";
    const addhead = "Add a new product to inventory";
    return React.createElement(React.Fragment, null, React.createElement("h1", null, head), React.createElement(InventorySubhead, null), React.createElement("hr", null), React.createElement("label", null, addhead), React.createElement("hr", null));
  }

}

const element = React.createElement(MyProductList, null);
ReactDOM.render(element, document.getElementById('contents'));