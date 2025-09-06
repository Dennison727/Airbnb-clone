function Icons(props) {
    return(
        <div className="flex flex-row gap-1">
            <img src={props.src} alt="filter" />
            <p>{props.man}</p>
        </div>

    )
}
export default Icons;