import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi, how are you?", likescount: 23 },
    { id: 2, message: "It's my first post!", likescount: 12 },
  ];

  let postsElements = posts.map((p) => {
    return <Post message={p.message} likescount={p.likescount} />;
  });

  return (
    <div>
      My posts
      <div>
        <textarea class="resize-none border rounded-md p-4 w-full h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        <button class="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 mb-3">
          Add Post
        </button>
      </div>
      <div className={c.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
