
// import logo from '../assets/download.jpg'

// const Footer = () => {
//     return (
//         <footer>
//             <div className="footer p-10 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-neutral-content">
//                 <div>
//                     <img className='w-1/4 rounded-full' src={logo} alt="" />
//                     <p>MAKEUP SCHOLLING<br />Providing reliable service since 2000</p>
//                 </div>
//                 <div>
//                     <span className="footer-title">Follow Us on Social Media</span>
//                     <div className="grid grid-flow-col gap-4">
//                         <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
//                         <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
//                         <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
//                     </div>
//                 </div>
//                 <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14  text-center">
//                     <div className="">
//                         <h1>We Support</h1>
//                         <p>_________________________</p>
//                         <p className='p-2'>Business World</p>
//                         <p className='p-2'>Self emploment</p>
//                         <p className='p-2'>National employment</p>
//                         <p className='p-2'>Socialization</p>
//                         <p className='p-2'>Globalization</p>
//                         <p className='p-2'>People impowerment</p>
//                         <p className='p-2'>Earning placement</p>
//                     </div>
//                     <div className="">
//                         <h1>We Help</h1>
//                         <p>_________________________</p>
//                         <p className='p-2'>To earning</p>
//                         <p className='p-2'>Support Family</p>
//                         <p className='p-2'>emploment policy</p>
//                         <p className='p-2'>Socialization</p>
//                         <p className='p-2'>Make skilled</p>
//                         <p className='p-2'>National development</p>
//                         <p className='p-2'>Self improvment</p>
//                     </div>
//                     <div className="">
//                         <h1>We are available</h1>
//                         <p>_________________________</p>
//                         <p className='p-2'>Facebook</p>
//                         <p className='p-2'>Instagram</p>
//                         <p className='p-2'>Linkedln</p>
//                         <p className='p-2'>Twiter</p>
//                         <p className='p-2'>Whats app</p>
//                        <div className="">
//                         <input className='p-2 rounded' type="text" />
//                         <button className='m-2 btn bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800'>Send</button>
//                        </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="p-2 footer-center bg-nutral text-base-content">
//                     <div>
//                         <p>Copyright © 2023 - All right reserved by Summer Camp</p>
//                     </div>
//                 </div>
//         </footer>
//     );
// };

// export default Footer;


import logo from '../assets/download.jpg';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-neutral-content">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 py-10 grid gap-10 md:grid-cols-3 text-center md:text-left">
                
                {/* Logo + Description */}
                <div>
                    <img className="w-24 h-24 mx-auto md:mx-0 rounded-full shadow-lg border-4 border-purple-500" src={logo} alt="Makeup Schooling Logo" />
                    <p className="mt-4 text-sm opacity-80">
                        <span className="font-semibold text-lg">MAKEUP SCHOOLING</span><br />
                        Providing reliable service since 2000
                    </p>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="footer-title text-lg font-semibold mb-4">Follow Us</h2>
                    <div className="flex justify-center md:justify-start gap-4">
                        {[
                            { href: "#", icon: "M24 4.557c..." }, // Twitter
                            { href: "#", icon: "M19.615 3.184c..." }, // YouTube
                            { href: "#", icon: "M9 8h-3v4..." }  // Facebook
                        ].map((item, idx) => (
                            <a key={idx} href={item.href} className="p-2 rounded-full bg-purple-700 hover:bg-purple-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                                    <path d={item.icon}></path>
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h2 className="footer-title text-lg font-semibold mb-4">Stay Updated</h2>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="text"
                            placeholder="Your email"
                            className="p-2 rounded w-full text-black"
                        />
                        <button className="btn bg-gradient-to-r from-purple-400 to-purple-700 hover:from-purple-500 hover:to-purple-800 text-white">
                            Send
                        </button>
                    </div>
                </div>
            </div>

            {/* Links Section */}
            <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center sm:text-left">
                <div>
                    <h3 className="text-lg font-semibold">We Support</h3>
                    <p className="opacity-70 mt-2">Business World</p>
                    <p className="opacity-70">Self employment</p>
                    <p className="opacity-70">National employment</p>
                    <p className="opacity-70">Socialization</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">We Help</h3>
                    <p className="opacity-70 mt-2">To earn</p>
                    <p className="opacity-70">Support Family</p>
                    <p className="opacity-70">Employment policy</p>
                    <p className="opacity-70">Make skilled</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">We Are On</h3>
                    <p className="opacity-70 mt-2">Facebook</p>
                    <p className="opacity-70">Instagram</p>
                    <p className="opacity-70">LinkedIn</p>
                    <p className="opacity-70">Twitter</p>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="border-t border-purple-700 py-4 text-center text-sm opacity-70">
                Copyright © 2023 - All rights reserved by Summer Camp
            </div>
        </footer>
    );
};

export default Footer;
