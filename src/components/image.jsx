function Image(){
    return(
        <div className="bg-[url('/public/image/theimage.png')] h-96 w-full bg-cover flex flex-col justify-center items-center text-white gap-4 rounded-lg border-5">
            <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
            <p className="text-sm">The best prices for over 2 million properties worldwide</p>
        </div>
    )
}
export default Image;