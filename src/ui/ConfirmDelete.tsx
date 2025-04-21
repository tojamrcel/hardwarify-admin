import Button from "./Button";

function ConfirmDelete({
  onCloseModal,
  onConfirm,
}: {
  onCloseModal?: () => void;
  onConfirm?: () => void;
}) {
  function handleClick() {
    onConfirm?.();
    onCloseModal?.();
  }

  return (
    <div className="flex max-h-[10rem] max-w-[40rem] flex-col gap-[1.2rem]">
      <h3 className="text-3xl font-bold">Delete product</h3>
      <p className="mb-[1.2rem] text-lg text-zinc-800">
        Are you sure you want to delete this product? This action cannot be
        undone.
      </p>
      <div className="flex justify-end gap-6">
        <button
          onClick={onCloseModal}
          className="cursor-pointer text-zinc-700 hover:text-zinc-900"
        >
          Cancel
        </button>
        <Button onClick={handleClick}>Delete</Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
