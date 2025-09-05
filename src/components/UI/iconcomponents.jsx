function IconComponents(props) {
  return (
    <div>
        <img src={props.icon} alt="icon"/>
        <p>{props.text}</p>

    </div>
  );
}
export default IconComponents;