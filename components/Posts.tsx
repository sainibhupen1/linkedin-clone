import React from "react";
import Post from "./Post";
import { IPostDocument } from "@/models/post.model";

const Posts = ({ posts }: { posts: any[] }) => {
  // const p = posts?.post?._id;
  // console.log(p);
  return (
    <div>
      {posts?.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
      {/* key={post._id} */}
    </div>
  );
};

export default Posts;
