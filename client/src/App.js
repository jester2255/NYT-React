import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    articles:[],
    articleSerch:""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
  // When the form is submitted, prevent its default behavior, get articles update the articles state
   event.preventDefault();
   API.getarticles(this.state.articleSerch)
    .then(res => this.setState({ articles: res.data }))
    .catch(err => console.log(err));
  };

render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="articleSerch"
                        value={this.state.articleSerch}
                        onChange={this.handleInputChange}
                        placeholder="Search For an Article"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.articles.length ? (
                <h1 className="text-center">No articles to Display</h1>
              ) : (
                <articleList>
                  {this.state.articles.map(article => {
                    return (
                      <articleListItem
                        key={article.title}
                        title={article.title}
                        href={article.href}
                        ingredients={article.ingredients}
                        thumbnail={article.thumbnail}
                      />
                    );
                  })}
                </articleList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;