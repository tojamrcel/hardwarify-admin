import { useForm } from "react-hook-form";
import { Product } from "../../types/types";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import FormError from "../../ui/FormError";

function AddProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  function onSubmit(data: Product) {
    console.log(data);
  }

  return (
    <form
      className="flex w-1/2 flex-col gap-2"
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
        <Input
          type="text"
          register={register("description", {
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
          className="h-10 rounded-md border-2 border-transparent bg-stone-100 px-2 text-gray-700 transition-colors duration-200 focus:border-red-700 focus:outline-0"
          {...register("category", {
            required: "Category is required",
          })}
        >
          <option value="mobile_devices">mobile devices</option>
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
        <Input type="number" register={register("discount")} />
        {errors.discount && <FormError>{errors.discount?.message}</FormError>}
      </FormRow>
      <FormRow>
        <Label>Availability</Label>
        <Input type="number" register={register("availability")} />
        {errors.availability && (
          <FormError>{errors.availability?.message}</FormError>
        )}
      </FormRow>
      <FormRow>
        <Label>Image</Label>
        <input
          type="file"
          accept="image/*"
          className="tranistion-all text-gray-600 duration-200 file:rounded-md file:bg-red-700 file:p-1 file:font-semibold file:text-stone-100 file:hover:bg-red-800"
          {...register("image", {
            required: "Please upload an image.",
          })}
        />
        {errors.image && <FormError>{errors.image?.message}</FormError>}
      </FormRow>
      <div className="mt-2 ml-auto">
        <Button>Add product</Button>
      </div>
    </form>
  );
}

export default AddProductForm;
