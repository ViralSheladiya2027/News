import React from 'react'

 const NewsItem =(props) =>{
   let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div>
        <div className="my-3">
       <div className="card">
        <div
        style={{
        justifyContent: 'flex-end',
        display:'flex' ,
        position: 'absolute',
        right: '0'
       }}>
        <span className="badge rounded-pill bg-danger">{source} </span>
        </div>
            <img src={!imageUrl?"https://imgs.search.brave.com/UHKu_V6ep7Ci4SvfAA6TXbaByk5b40pNKzUIWPWIGXg/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/N09tVUhiUFdNUVlx/MEdjd0RRQ0pBSGFF/OCZwaWQ9QXBp" :imageUrl} className="card-img-top" alt="..." />
                 <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target ="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                  </div>
                </div>
                </div>
                </div>
    )
  
};
export default NewsItem;