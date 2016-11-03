import React, { Component } from 'react';
import "./Learner.css"
class Reading extends Component {
  coursework(){
    return(
      <div className="courseworkContainer">
        Multivariable Calculus : MATH53<br />
        Linear Algebra and Differential Equations : MATH54<br />
        Introduction to Analysis : MATH104<br />
        Linear Algebra : MATH110<br />
        Abstract Algebra : MATH113 <br />
        Complex Analysis : MATH185<br />
        <br />
        Structure and Interpretation of Programs : CS61A<br />
        Data Structures : CS61B<br />
        Great Ideas of Computer Architecture : CS61C<br />
        Discrete Math and Probability : CS70<br />
        User Interfaces : CS160<br />
        Introduction to Computer Science Theory : CS170<br />
        Introduction to Artifcial Intelligence : CS188<br />
        Web Design Decal : CS198<br />
        Ruby on Rails Decal : CS198<br /><br />
      </div>);
  }
  reading(){
    return (
      <div className="readingContainer">
        1Q84 : Haruki Murakami
        <br />
        My Struggle Book I : Karl Ove Knausgaard
        <br />
        Yellow : Don Lee<br />
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
