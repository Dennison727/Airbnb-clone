function Button(props) {
  return (
    <div>
        <div className="">
           <button className={props.className}>
                 {props.button}
            </button>
        </div>
    </div>
  );
}
export default Button; 
