import { useForm } from "react-hook-form";
import { Product } from "../../types/types";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function AddProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();
  console.log(errors);

  function onSubmit(data: Product) {
    console.log(data);
  }

  return (
    <form
      className="flex w-1/2 flex-col gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow>
        <label className="font-semibold text-gray-600">Product name</label>
        <Input type="text" />
      </FormRow>
      <FormRow>
        <label className="font-semibold text-gray-600">Description</label>
        <Input type="text" />
      </FormRow>
      <FormRow>
        <label className="font-semibold text-gray-600">Category</label>
        <select className="h-10 rounded-md border-2 border-transparent bg-stone-100 px-2 text-gray-700 transition-colors duration-200 focus:border-red-700 focus:outline-0">
          <option value="mobile_devices">mobile devices</option>
        </select>
      </FormRow>
      <FormRow>
        <label className="font-semibold text-gray-600">Price</label>
        <Input type="number" />
      </FormRow>
      <FormRow>
        <label className="font-semibold text-gray-600">Discount</label>
        <Input type="number" />
      </FormRow>
      <FormRow>
        <label className="font-semibold text-gray-600">Availability</label>
        <Input type="number" />
      </FormRow>
      <FormRow>
        <label className="font-semibold text-gray-600">Image</label>
        <input
          type="file"
          accept="image/*"
          className="tranistion-all text-gray-600 duration-200 file:rounded-md file:bg-red-700 file:p-1 file:font-semibold file:text-stone-100 file:hover:bg-red-800"
        />
      </FormRow>
      <div className="mt-2 ml-auto">
        <Button>Add product</Button>
      </div>
    </form>
  );
}

export default AddProductForm;
