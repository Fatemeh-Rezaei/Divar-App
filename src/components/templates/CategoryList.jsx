import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import Loader from "components/modules/Loader";
import { getCategory } from "services/admin";
import { deleteCategory } from "services/admin";

import styles from "./CategoryList.module.css";
import toast from "react-hot-toast";

function CategoryList() {
  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategory,
  });

  const { mutate } = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries("get-categories"),
        toast.success("دسته بندی با موفقیت حذف شد");
    },
  });

  console.log({ data, isFetching });

  const deleteHandler = (id) => {
    mutate(id);
  };

  return (
    <div className={styles.list}>
      {isFetching ? (
        <Loader />
      ) : (
        data.data.map((i) => (
          <div key={i._id}>
            <div>
              <img src={`${i.icon}.svg`} />
              <h5>{i.name}</h5>
            </div>
            <div className={styles.left}>
              <button onClick={() => deleteHandler(i._id)}>حذف</button>
              <p>slug: {i.slug}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
