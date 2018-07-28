import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Article extends Component {

  render() {
    const {article} = this.props

    return (
      <div>        
        <Link to={`/blog/${article.id}`}>
          <h3>
            {article.title}
          </h3>
          <p>{article.text}</p>
          <span>Number of Views: {article.views}</span>
        </Link>
      </div>
    );
  }
}

export default Article
