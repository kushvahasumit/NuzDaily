import React, { Component } from "react";
import { Link } from "react-router-dom";


export class Newsitem extends Component {


  
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;

    return <div>
      <div className="card" >
    <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/107272522-1689618676764-Traders-TF-Photo-AJ-20230717-0129-PRESS-13.jpg?v=1689691375&w=1920&h=1080 ":imageUrl} className="card-img-top" alt="police" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      
    </div>
  
    <div className="card-body ">
      <Link href={newsUrl} target="_blank" className="card-link">READ NEWS</Link>
      
    </div>
  </div>
  </div>
  }
}

export default Newsitem;
