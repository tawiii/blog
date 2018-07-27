import React, { Component } from 'react';
import {connect} from 'react-redux'
import Article from './Article'
import {loadBlog} from '../AC';
import '../style.css';


class Blog extends Component {

  state = {
    articles: [],
    views: true
  }

  componentDidMount() {
    const {loadBlog} = this.props;
    loadBlog();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      articles: nextProps.blog.defArticles
    });
  }

  handleChange = e => {
    const {blog} = this.props;
    const value = e.target.value.toLowerCase();
    const articles = blog.defArticles.filter(article => {
      return article.title.toLowerCase().includes(value);
    });

    this.setState({
      articles
    });
  }

  handleSort = (type) => {
    const {articles} = this.state;
    let isSorted = this.state[type];
    let direction = isSorted ? 1 : -1;

    const sorted = articles.slice().sort((a, b) => {
      if (a[type] === b[type]) { return 0; }
      return a[type] > b[type] ? direction : direction * -1;
    });

    this.setState({
      articles: sorted,
      [type]: !isSorted
    });
  }

  render() {
    const {articles} = this.state;
    const articleElements = articles.map(article =>
      <li key={article.id}>
        <Article
          article = {article}
        />
      </li>
    )

    return (
      <div className="wrap">
        <div className="header">
          <label>
            Поиск:
            <input
              type="text"
              onChange={this.handleChange}
            />
          </label>        
          <p
            className="sort"
            onClick={() => this.handleSort('views')}
          >
            Сортировать по просмотрам
          </p>
        </div>        
        <ul>
          {articleElements}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({
  blog: state.blog
}), {loadBlog})(Blog)
