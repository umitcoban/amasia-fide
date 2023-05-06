const Contact = () => {

    return (
        <section className="bg-white dark:bg-gray-900 font-inter">
            <div className="container px-6 py-12 mx-auto">
                <div>
                    <h1 className="mt-2 text-2xl font-extrabold text-gray-800 md:text-3xl dark:text-white">Bizi Ziyaret Edin &#128519;</h1>

                    <p className="mt-3 font-semibold text-gray-500 dark:text-gray-400">Size hizmet etmekten büyük bir mutluluk duyarız. Gelin beraber bir 
                    <span className="text-primary-green"> &#127861; çay</span> içelim</p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                        <div>
                            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">

                            </span>

                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">hello@merakiui.com</p>
                        </div>

                        <div>
                            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">

                            </span>

                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">100 Smith Street Collingwood VIC 3066 AU</p>
                        </div>

                        <div>
                            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">

                            </span>
                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">+1 (555) 000-0000</p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                        <iframe width="100%" height="100%" title="map" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%konya+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Contact;