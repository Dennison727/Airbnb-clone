import Button from "./UI/button";
import Rooms from "./UI/rooms";
import Villaproperty from "./Villaproperty";
import Icons from "./UI/icons";


function PropertyCard(props){
  return (
    <div className="flex flex-col gap-4 p-2 m-2 border border-gray-200 rounded-lg shadow-md">
        <img src={props.image} alt="PropetyCard" className="w-74 h-auto rounded-lg"/> 
        <div className="flex flex-row items-center w-full gap-2">
            <Button button={"Top villa"} className="rounded-full border border-gray-300 hover:bg-green-100 text-sm"/> 
            <Button button={"Self Checkin"} className="rounded-full border border-gray-300 hover:bg-green-100 text-sm"/>
            <Button button={"Free Reschedule"} className="rounded-full border border-gray-300 hover:bg-green-100 text-sm"/>
        </div>
        <div className="flex">
            <Villaproperty />
        </div>
        <div>
          <Rooms />
        </div>
      </div>
  );
}
export default PropertyCard;