import { useEffect,useState } from "react";
import axios from 'axios';
import {Link,useHistory} from 'react-router-dom'

const PostDetail=(get)=>{
    const history = useHistory()
    const backHandle = ()=>{
        history.goBack()
    }
    
    const [post,setPost] = useState(null)
    useEffect(async ()=>{
        const fetched = await axios.get(`https://jsonplaceholder.typicode.com/posts/${get.match.params.id}`)
        const fetchedData = fetched.data
        const toShow= <div>
            <div className='titleButton'>
                <button onClick={backHandle}>Back</button>
                <h1>{fetchedData.title}</h1>
            </div>
            <div className="tresc">{fetchedData.body}</div></div>
        setPost(toShow)
    },[]);
    console.log(post)


    return(
        <div className="details">{post}</div>
    )
}
export default PostDetail;