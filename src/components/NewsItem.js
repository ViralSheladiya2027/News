import React, { Component } from 'react'

export default class NewsItem extends Component {

  
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div>
        <div className="my-3">
       <div className="card">
                  <img src={!imageUrl?"https://imgs.search.brave.com/UHKu_V6ep7Ci4SvfAA6TXbaByk5b40pNKzUIWPWIGXg/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/N09tVUhiUFdNUVlx/MEdjd0RRQ0pBSGFF/OCZwaWQ9QXBp" :imageUrl} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target ="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                  </div>
                </div>
                </div>
                </div>
    )
  }
}
