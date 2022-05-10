import BlogList from './Bloglist';
import useFetch from './useFetch';

// const Home= () => {
//   const [name, setName] = useState("Godbless");
//   const [age, setAge] = useState(25);

//   const handleClick = () => {
//     setName("freeman");
//     setAge(30);
//   }
//     return(
//         <div className="home">
//           <h2>Name/Age Change Game</h2>
//           <p>Demonstrating click events...</p>
//           <h2 style={{color: "#f1356d"}}>{name} is {age} years old.</h2>
//           <button onClick = {handleClick}>click me to change name</button>
//         </div>
//     );
// }

// const Home = () => {
//   const [blogs, setBlogs] = useState([
//     {title: 'my new website', body: 'this is my new website', author: 'Godbless', id:1},
//     {title: 'my new website', body: 'this is my new website', author: 'Godbless', id:2},
//     {title: 'my new website', body: 'this is my new website', author: 'Godbless', id:3}
//   ]);
const Home = () => {
  const {data:blogs, isPending} = useFetch('http://localhost:8000/blogs')

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }

  return ( 
    <div>
      {/* <h2>Homepage</h2> */}
      <div className="home">
        {isPending && <div className="loading">Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
      </div>
    </div>
   );
}
export default Home;