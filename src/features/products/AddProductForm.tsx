import { useForm } from "react-hook-form";
import { NewProduct, Product } from "../../types/types";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import FormError from "../../ui/FormError";
import useCategories from "./useCategories";
import useAddProduct from "./useAddProduct";
import useUpdateProduct from "./useUpdateProduct";

function AddProductForm({
  product,
  onCloseModal,
}: {
  product?: Product;
  onCloseModal?: () => void;
}) {
  const isEditing = Boolean(product);

  const { categories, error } = useCategories();
  const { createProduct, isLoading } = useAddProduct();
  const { updateProduct, isUpdating } = useUpdateProduct();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<NewProduct>({
    defaultValues: {
      product_name: product?.product_name,
      description: product?.description,
      regular_price: product?.regular_price,
      discount: product?.discount ?? null,
      availability: product?.availability,
      category: product?.category
        ? product?.category
        : categories
          ? categories[0]
          : "accessories",
    },
  });

  if (error) return <p className="text-red-500">An error occured</p>;

  function onSubmit(data: NewProduct) {
    if (isEditing && product?.id) {
      const editedProduct = { ...data, image: product.image, id: product.id };
      updateProduct(editedProduct);
      onCloseModal?.();
    }
    if (!isEditing) createProduct(data);
  }

  return (
    <form
      className={`flex ${isEditing ? "w-full" : "w-1/2"} flex-col gap-2`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow>
        <Label>Product name</Label>
        <Input
          type="text"
          register={register("product_name", {
            required: "Product name is required",
          })}
        />
        {errors.product_name && (
          <FormError>{errors.product_name?.message}</FormError>
        )}
      </FormRow>
      <FormRow>
        <Label>Description</Label>
        <textarea
          rows={4}
          className="resize-none rounded-md border-2 border-transparent bg-stone-100 p-1 transition-all duration-200 focus:border-red-700 focus:outline-0 dark:bg-gray-800 dark:text-gray-400"
          {...register("description", {
            required: "Description is required",
          })}
        />
        {errors.description && (
          <FormError>{errors.description?.message}</FormError>
        )}
      </FormRow>
      <FormRow>
        <Label>Category</Label>
        <select
          className="h-10 rounded-md border-2 border-transparent bg-stone-100 px-2 text-gray-700 transition-colors duration-200 focus:border-red-700 focus:outline-0 dark:bg-gray-800 dark:text-gray-400"
          {...register("category", {
            required: "Category is required",
          })}
        >
          {categories?.map((cat) => (
            <option value={cat} key={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>
        {errors.category && <FormError>{errors.category?.message}</FormError>}
      </FormRow>
      <FormRow>
        <Label>Regular price</Label>
        <Input
          type="number"
          register={register("regular_price", {
            required: "Regular price is required",
          })}
        />
        {errors.regular_price && (
          <FormError>{errors.regular_price?.message}</FormError>
        )}
      </FormRow>
      <FormRow>
        <Label>Discount</Label>
        <Input
          type="number"
          register={register("discount", {
            validate: (val) =>
              watch("regular_price") > Number(val) ||
              "Discount must be less than regular price.",
            min: {
              value: 0,
              message: "Discount must be a positive number.",
            },
          })}
        />
        {errors.discount && <FormError>{errors.discount?.message}</FormError>}
      </FormRow>
      <FormRow>
        <Label>Availability</Label>
        <Input type="number" register={register("availability")} />
        {errors.availability && (
          <FormError>{errors.availability?.message}</FormError>
        )}
      </FormRow>
      {!isEditing && (
        <FormRow>
          <Label>Image</Label>
          <input
            type="file"
            accept="image/*"
            className="tranistion-all text-gray-600 duration-200 file:rounded-md file:bg-red-700 file:p-1 file:font-semibold file:text-stone-100 file:hover:bg-red-800 dark:file:bg-red-800"
            {...register("image", {
              required: "Please upload an image.",
            })}
          />
          {errors.image && <FormError>{errors.image?.message}</FormError>}
        </FormRow>
      )}
      <div className="mt-2 ml-auto">
        <Button disabled={isLoading || isUpdating}>
          {isEditing ? "EDIT PRODUCT" : "ADD PRODUCT"}
        </Button>
      </div>
    </form>
  );
}

export default AddProductForm;
