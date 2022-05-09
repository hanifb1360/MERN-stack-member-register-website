
import { useEffect, useState } from "react"
import {getData} from '../functions/functions'


let Members = (props) => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getData("http://localhost:8000/posts").then(res => 
            setPosts(res.data)
        )},[]
    )

    return(
        <div>
            {
                posts && posts.map(post => {
                    return(
                    <div style={{border:"2px solid white"}}>
                        <h2>{post.attributes.Name}</h2>
                        <p>{post.attributes.Level}</p>
                    </div>)
                })
            }
        </div>
    )
}

export default Members
