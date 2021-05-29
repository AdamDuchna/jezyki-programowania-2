import { useEffect,useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'

const PostsList=()=>{
    
    const [postsList,setpostList] = useState(null)
    const [showedList,setShowedList] = useState(null)
    useEffect(async ()=>{
        const res= await axios.get('https://jsonplaceholder.typicode.com/posts').then((e)=>{return e.data})
        console.log(res)
        setpostList(res)
        setShowedList(res.map((el)=><Link to={`/details/${el.id}`} style={{ textDecoration: 'none' }} ><li key={el.id}>{el.id,el.title}</li></Link>))

    },[]);



    return(
        <div>
            <Link to='port/create' style={{ textDecoration: 'none' }}><button className="createPost" >Create post</button></Link>
            <div className="lista">{showedList}</div>
        </div>
    )
}
export default PostsList;