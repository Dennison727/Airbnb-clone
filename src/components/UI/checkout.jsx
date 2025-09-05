function CheckOut() {
  return (
    <div >
      <div className="flex gap-1 flex-col" >
          <label htmlFor="checkout">Check-out</label>
          <input type="date" id="checkout" placeholder="Add date" className="text-gray-600 border rounded-full px-1 py-1"/>
      </div>
    </div>
  );
}
export default CheckOut;
