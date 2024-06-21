import { sp } from "utils/numbers";

import styles from "./Main.module.css";

function Main({ posts }) {
  const baseURL = import.meta.env.VITE_BASE_URL;
  console.log(posts);
  return (
    <div className={styles.container}>
      {posts.data.posts.map((post) => (
        <div key={post._id} className={styles.card}>
          <div>
            <p>{posts.options?.title}</p>
            <div className={styles.info}>
              <p>{sp(post.amount)} تومان</p>
              <span>{post.options?.city}</span>
            </div>
          </div>
          <img src={`${baseURL}${post.images[0]}`} />
        </div>
      ))}
    </div>
  );
}

export default Main;
