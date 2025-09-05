function People() {
  return (
    <div>  
     <div className="flex gap-1 flex-col" >
        <label htmlFor="people">People</label>
        <input type="number" id="people" min="1" placeholder="Add guest" className="text-gray-600 border rounded-full px-1 py-1"/>
     </div>
    </div>   
  );
}
export default People;
