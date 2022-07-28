import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country:"in",
    pageSize:5,
    category:"genreal",
  }

  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  capitalizeFirstLetter =(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`;
  }
  async updateNews(){
    this.props.setProgress(10);
    const url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
  let data = await fetch(url);
  this.setState({loading:true});
  this.props.setProgress(40);
  let parseData = await data.json();
  this.props.setProgress(70);
  this.setState({ articles: parseData.articles, 
    totalResults:parseData.totalResults,
    loading:false
  });
  this.props.setProgress(100);
  }

  async componentDidMount() {
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=328a3b8c469549a8bcfc71fb8e3ff917&page=1&pagesize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // this.setState({loading:true});
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({ articles: parseData.articles, 
    //   totalResults:parseData.totalResults,
    //   loading:false
    // });
    this.updateNews();
  }

  handlePreClick = async () => {
  //   let url =
  //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=328a3b8c469549a8bcfc71fb8e3ff917&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
  // let data = await fetch(url);
  // this.setState({loading:true});
  // let parseData = await data.json();
  //   this.setState({
  //     page:this.state.page-1 ,
  //     articles: parseData.articles,
  //     loading:false
  //   })
  this.setState({page:this.state.page-1})
  this.updateNews();
  };

  handleNextClick = async () => {
    if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
  //      let url =
  //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=328a3b8c469549a8bcfc71fb8e3ff917&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
  // this.setState({loading:true});
  //   let data = await fetch(url);
  // let parseData = await data.json();
  //   this.setState({
  //     page:this.state.page+1 ,
  //     articles: parseData.articles,
  //     loading:false
  //   })
  this.setState({page:this.state.page+1})
  this.updateNews();
  }
  };

   fetchMoreData = async () => {
    this.setState({page:this.state.page+1})
     const url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
  let data = await fetch(url);
  // this.setState({loading:true});
  let parseData = await data.json();
  this.setState({ articles:this.state.articles.concat(parseData.articles) , 
    totalResults:parseData.totalResults,
    loading:false
  });
  };

  render() {
    return (
      <div>
        <div className="container my-3">
          <h2 className="text-center" style={{margin:"35px"}} >NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines  </h2>
          {this.state.loading && <Spinner/>}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 30) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 82)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author = {element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    />
                  
                </div>
              );
            })}
          </div>
          </InfiniteScroll>

          {/* <div className="container d-flex justify-content-between">
            <button
            disabled={this.state.page<=1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePreClick}
            >
              &larr; previous
            </button>
            <button
            disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}

export default News;
