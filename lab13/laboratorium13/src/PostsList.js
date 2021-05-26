import { useEffect,useState } from "react";
import axios from 'axios';

const PostsList=()=>{
    
    const [postsList,setpostList] = useState(null)
    useEffect(async ()=>{
        const res= await axios.get('https://jsonplaceholder.typicode.com/posts').then((e)=>{return e.data})
        setpostList(res)
        console.log(res)

    },[]);


    return(
        <div>test</div>
    )
}
export default PostsList;