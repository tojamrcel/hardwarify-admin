import Button from "../ui/Button";

function PageNotFound() {
  return (
    <div>
      <div className="flex h-[80vh] max-h-3/4 flex-col items-center justify-center gap-4">
        <h1 className="text-center text-6xl font-bold text-gray-700 uppercase">
          oops...
        </h1>
        <p className="text-center text-xl text-gray-700">
          It seems that the page you are trying to visit does not exist.
        </p>
        <div className="flex flex-col">
          <Button>Go to dashboard</Button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
