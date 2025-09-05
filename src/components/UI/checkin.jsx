function CheckIn() {
  return (
    <div>
       <div className="flex gap-1 flex-col">
          <label htmlFor="checkin">Check-in</label>
          <input type="date" id="checkin" placeholder="Add date" className="text-gray-600 border rounded-full px-1 py-1" />
       </div>
    </div>
  );
}
export default CheckIn;
