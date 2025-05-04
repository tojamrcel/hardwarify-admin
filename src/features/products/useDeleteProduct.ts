import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct as deleteProductAPI } from "../../services/apiProducts";
import toast from "react-hot-toast";

function useDeleteProduct() {
  const queryClient = useQueryClient();

  const {
    mutate: deleteProduct,
    error,
    isPending: isDeleting,
  } = useMutation({
    mutationFn: (id: number) => deleteProductAPI(id),
    onSuccess: () => {
      toast.success("Product deleted successfully.");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => {
      toast.error("Couldn't delete product.");
    },
  });

  return { deleteProduct, error, isDeleting };
}

export default useDeleteProduct;
