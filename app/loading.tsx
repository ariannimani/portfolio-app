export default function Loading() {
  return (
    <>
      <div className="w-96 h-96 rounded-md mx-auto">
        <div className="flex animate-pulse flex-column items-center h-full justify-center space-x-5">
          <div className="w-36 bg-gray-ml dark:bg-gray-sd h-36 rounded-full "></div>
          <div className="flex flex-col space-y-3">
            <div className="w-36 bg-gray-ml dark:bg-gray-sd h-12 rounded-md "></div>
            <div className="w-36 bg-gray-ml dark:bg-gray-sd h-12 rounded-md "></div>
          </div>
        </div>
      </div>
    </>
  );
}
