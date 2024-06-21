import { useQuery } from "@tanstack/react-query";
import Loader from "components/modules/Loader";
import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";
import { getCategory } from "services/admin";
import { getAllPosts } from "services/user";

const style = { display: "flex" };

function HomePage() {
  const { data: posts, isFetching: postLoading } = useQuery({
    queryKey: ["post-list"],
    queryFn: getAllPosts,
  });
  const { data: categories, isFetching: categoryLoading } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategory,
  });

  return (
    <>
      {postLoading || categoryLoading ? (
        <Loader />
      ) : (
        <div style={style}>
          <Sidebar categories={categories} />
          <Main posts={posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
