
function Footer(){
    return(
        <div>
            <div className="h-2 w-full bg-green-400"></div>
            <div className="bg-gray-900 text-gray-300 px-8 py-10">
                <div className="max-w-7x1 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    <div>
                        <img src="/public/Logo/Vector.png" alt="ALT" />
                        <p className="mt-4 text-sm landing-6">
                            ALX is a platform where travelers can discover and book unique,
                            comfortablre, and affordable lodging options worldwide. from cozy
                            city apartment and tranquli Countryside retreats to exotic beachside
                            villas, ALX connects you with the perfect place to stay for any trip.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-white font-semibold mb-4">Explore</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Apartments in Dubai</a></li>
                            <li><a href="#" className="hover:text-white">Hotels in New York</a></li>
                            <li><a href="#" className="hover:text-white">Villa in spain</a></li>
                            <li><a href="#" className="hover:text-white">Mansion in Indonesia</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-white font-semibold mb-4">Company</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">About us</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">Career</a></li>
                            <li><a href="#" className="hover:text-white">Customers</a></li>
                            <li><a href="#" className="hover:text-white">Brand</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-white font-semibold mb-4">Help</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Support</a></li>
                            <li><a href="#" className="hover:text-white">Cancel</a></li>
                            <li><a href="#" className="hover:text-white">Refunds Process</a></li>
                        </ul>
                    </div>
                    <div className="md:col-span-4 border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between text-sm">
                        <p>
                            Some hotel requires you to cancel more than 24 hours before check-in
                            <a href="#" className="text-green-500 hover:underline">Details here</a>
                        </p>
                        <div className="flex space-x-6 mt-2 md:mt-0">
                            <a href="#" className="hover:text-white">Terms of Service</a>
                            <a href="#" className="hover:text-white">Policy service</a>
                            <a href="#" className="hover:text-white">Cooking Policy</a>
                            <a href="#" className="hover:text-white">Partners</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;