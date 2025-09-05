import Button from "./UI/button";
import AirbnbLogo from "./UI/airbnb";
import Location from "./UI/location";
import CheckIn from "./UI/checkin";
import CheckOut from "./UI/checkout";
import People from "./UI/People"; 
import Search from "./UI/search";
import IconComponents from "./UI/iconcomponents";

function Navbar() {
  return (
    <div>
      <div className="bg-green-900 flex gap-4 justify-center items-center p-2">
        <img src="/public/icons/massage.svg" alt="logo"/>
        <h1 className="text-white">Overseas trip? Get the latest information on travel guides</h1>
        <Button button={"More info"} className="bg-black text-white rounded-lg text-sm"/>

      </div>



     <div className="flex gap-2 justify-center justify-between items-center pl-1 pr-4 mt-auto border-b">
        <div>
          <AirbnbLogo />
        </div>
        <Location />
        <CheckIn />
        <CheckOut />
        <People />
        <Search />

        <div className="flex gap-3 items-center pl-auto">
          <Button button={"Sign in"} className="items-center px-4 rounded-full border border-gray-300 hover:bg-green-100"/>
          <Button button={"Sign up"} className="items-center px-4 rounded-full border border-gray-300 hover:bg-blue-100"/> 
        </div>

      </div>


      <div className="flex flex-row gap-5 overflow-x-auto p-5">
        <IconComponents icon={"/public/logo/livingroom.svg"} text={"Rooms"} className="hover:bg-blue-100"/>
        <IconComponents icon={"/public/logo/mansion.svg"} text={"Mansions"}/>
        <IconComponents icon={"/public/logo/farm.svg"} text={"Countryside"}/>
        <IconComponents icon={"/public/logo/villa.svg"} text={"Villa"}/>
        <IconComponents icon={"/public/logo/palmtree.svg"} text={"Tropical"}/>
        <IconComponents icon={"/public/logo/keychain.svg"} text={"New"}/>
        <IconComponents icon={"/public/logo/pool.svg"} text={"Amazing"}/>
        <IconComponents icon={"/public/logo/vacations.svg"} text={"Beach"}/>
        <IconComponents icon={"/public/logo/island.svg"} text={"Island"}/>
        <IconComponents icon={"/public/logo/camp.svg"} text={"Camping"}/>
        <IconComponents icon={"/public/logo/apartment.svg"} text={"Apartment"}/>
        <IconComponents icon={"/public/logo/house.svg"} text={"House"}/>
        <IconComponents icon={"/public/logo/lake.svg"} text={"Lake"}/>
        <IconComponents icon={"/public/logo/farmhouse.svg"} text={"Farm"}/>
        <IconComponents icon={"/public/logo/treehouse.svg"} text={"Treehouse"}/>
        <IconComponents icon={"/public/logo/cabin.svg"} text={"Cabin"}/>
        <IconComponents icon={"/public/logo/castle.svg"} text={"Castle"}/>
      </div>

    </div>
  )
}
export default Navbar;