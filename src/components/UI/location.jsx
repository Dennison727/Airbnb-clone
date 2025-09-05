function Location() {
  return (
    <div>
       <div className="flex gap-1 flex-col" >
          <label htmlFor="location">Location</label>
          <input type="text" id="location" placeholder="Search for destinations" className="text-gray-600 border rounded-full px-1 py-1" />
       </div>
    </div>  
  );
}
export default Location;
