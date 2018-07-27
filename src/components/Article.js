import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Article extends Component {

  render() {
    const {article} = this.props

    return (
      <div>
        <h3>
          <Link to={`/blog/${article.id}`}>
            {article.title}
          </Link>
        </h3>        
        <p>{article.text}</p>
        <span>Количество просмотров: {article.views}</span>
      </div>
    );
  }
}

export default Article
