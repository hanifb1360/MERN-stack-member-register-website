import { useEffect, useState } from "react";
import { getData } from "../functions/functions";

let Members = (props) => {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    getData("http://localhost:8000/posts").then((res) => {
      setPosts(res);
    });
  }, []);

  return (
    <div>
      {posts &&
        posts.map((post) => {
          return (
            <div
              key={`member-${post._id}`}
              style={{ border: "2px solid white" }}
            >
              <h2>{post.name}</h2>
              <p>{post.level}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Members;
