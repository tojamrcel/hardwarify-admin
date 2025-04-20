import { useMutation } from "@tanstack/react-query";
import { deleteProduct as deleteProductAPI } from "../../services/data_service";

function useDeleteProduct() {
  const {
    mutate: deleteProduct,
    error,
    isPending: isDeleting,
  } = useMutation({
    mutationFn: (id: number) => deleteProductAPI(id),
    onError: (err) => {
      console.log(err);
    },
  });

  return { deleteProduct, error, isDeleting };
}

export default useDeleteProduct;
