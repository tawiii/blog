import React, { Component } from 'react';
import {connect} from 'react-redux'

class ArticlePage extends Component {

  render() {
    const {match, blog} = this.props;
    let article;
    blog.defArticles.map(item => {
      item.id == match.params.id ? article = item : null
    })

    return (
      <div className="wrap">
        <h3>{article.title}</h3>
        <p>{article.text}</p>
        <span>Количество просмотров: {article.views}</span>
      </div>
    );
  }
}

export default connect((state) => ({
  blog: state.blog
}))(ArticlePage)
