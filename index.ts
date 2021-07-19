import { fetchPosts as getPosts, fetchComments as getComments } from './api'
import Pet from './helpers'

// console.log(getPosts);
// console.log(getComments);
getPosts();
getComments();


const bulldog = new Pet('Brown');


const user:UnknownProps = {
  name: 'Hayes',
  id: 0
};

user.age = 22;


interface UnknownProps {
    [key:string]: string | number;
}




const student: UnknownProps = {
    fistName: "Costas",
    lastName: "Zeimpekis"
  };
  
  const grades: UnknownProps = {
    math: 20,
    chemistry: 20,
    history: 30
  };