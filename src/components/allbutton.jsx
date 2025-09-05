import Button from "./UI/button";

function AllButton() {
  return (
      <div>
          <div className="flex flex-wrap gap-3 p-4 border-b">
             <Button button={"All"} className="items-center px-4 rounded-full border border-gray-300 hover:bg-green-100"/> 
             <Button button={"Top Villa"} className="items-center px-4 rounded-full border border-gray-300 hover:bg-green-100" />
             <Button button={"Free Reschedule"} className="items-center px-4 rounded-full border border-gray-300 hover:bg-green-100"/>
             <Button button={"Book Now, Pay Later"} className="items-center px-4 rounded-full border border-gray-300 hover:bg-green-100"/>
             <Button button={"Self Checkin"} className="items-center px-4 rounded-full border border-gray-300 hover:bg-green-100"/>
             <Button button={"Instant Book"}  className="items-center px-4 rounded-full border border-gray-300 hover:bg-green-100"/>
         
         <div className="flex gap-2 justify-end items-center ml-auto">
             <Button button={"Filters"} className="items-center px-4 rounded-full border border-gray-300 hover:bg-green-100"/>
             <Button button={"Sort by:Highest price"} className="items-center px-4 rounded-full border border-gray-300 hover:bg-green-100"/>
         </div>
         
         </div>
    </div>
  );
}
export default AllButton