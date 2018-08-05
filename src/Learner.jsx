import React, { Component } from 'react';
import "./Learner.css"
class Reading extends Component {
  coursework(){
    return(
      <div className='coursework'>
        <div className="smallDescription coursework">
          Multivariable Calculus : MATH53<br />
          Linear Algebra, Differential Equations : MATH54<br />
          Analysis : MATH104<br />
          Linear Algebra : MATH110<br />
          Abstract Algebra : MATH113<br />
          Numerical Analysis : MATH128A<br/>
          Complex Analysis : MATH185<br />
          <br />
          Structure and Interpretation of Programs : CS61A<br />
          Data Structures : CS61B<br />
          Computer Architecture : CS61C<br />
          Discrete Math and Probability : CS70<br />
          User Interfaces : CS160<br />
          Database Systems : CS186<br/>
          Computer Science Theory : CS170<br />
          Artifcial Intelligence : CS188<br />
          Web Design Decal : CS198<br />
          Ruby on Rails Decal : CS198<br />
          Product Management : IEOR186<br />
        </div>
        <i className="fa fa-arrows-v arrow"/>
      </div>);
  }
  reading(){
    return (
      <div className="smallDescription">
        1984 : George Orwell
        <br />
        Persuasion : Jane Austen
        <br />
        <br />
        <br />
        <br />
        Favorites
        <br />
        The Unbearable Lightness of Being : Milan Kundera
        <br />
        Norwegian Wood : Haruki Murakami
      </div>
      );
  }
  render() { 
    return (
      <div>
      {this.props.page === "currently reading" ? this.reading() : null}
      {this.props.page === "related coursework" ? this.coursework() : null}
      </div>
    );
  }
}

export default Reading;
