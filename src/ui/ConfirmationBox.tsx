import Button from "./Button";

interface ConfirmationBoxProps {
  type: "delete" | "bestseller";
  onCloseModal?: () => void;
  onConfirm?: () => void;
}

function ConfirmationBox({
  type,
  onCloseModal,
  onConfirm,
}: ConfirmationBoxProps) {
  function handleClick() {
    onConfirm?.();
    onCloseModal?.();
  }

  return (
    <div className="flex max-h-[10rem] max-w-[40rem] flex-col gap-[1.2rem]">
      <h3 className="text-3xl font-bold">
        {type === "delete" ? "Delete product" : "Change bestseller status"}
      </h3>
      <p className="mb-[1.2rem] text-lg text-zinc-800">
        {type === "delete" &&
          "Are you sure you want to delete this product? This action cannot be undone."}
        {type === "bestseller" &&
          "Are you sure you want to change bestseller status for this product?"}
      </p>
      <div className="flex justify-end gap-6">
        <button
          onClick={onCloseModal}
          className="cursor-pointer text-zinc-700 hover:text-zinc-900"
        >
          Cancel
        </button>
        <Button onClick={handleClick}>
          {type === "delete" && "Delete"}
          {type === "bestseller" && "Change"}
        </Button>
      </div>
    </div>
  );
}

export default ConfirmationBox;
