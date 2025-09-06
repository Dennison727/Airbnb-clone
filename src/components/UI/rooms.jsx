import Icons from "./icons";

function Rooms() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-row gap-4 p-1 w-4"> 
        <Icons src="/public/icons/people.svg" man="7" className='text-sm'/>
        <Icons src="/public/icons/bathtub.svg" man="9" className='text-sm'/>
        <Icons src="/public/icons/bed.svg" man="27" className='text-sm'/>
      </div>
      <div>
        <p>$2,550</p>
      </div>
    </div>
  );
}
export default Rooms;