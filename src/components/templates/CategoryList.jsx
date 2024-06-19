import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import Loader from "components/modules/Loader";
import { getCategory } from "services/admin";
import { deleteCategory } from "services/admin";

import styles from "./CategoryList.module.css";

function CategoryList() {
  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategory,
  });

  const { mutate } = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => queryClient.invalidateQueries("get-categories"),
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
            <img src={`${i.icon}.svg`} />
            <h5>{i.name}</h5>
            <button onClick={() => deleteHandler(i._id)}>حذف</button>
            <p>slug: {i.slug}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
