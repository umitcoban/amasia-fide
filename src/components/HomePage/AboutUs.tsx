/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element
// eslint-disable-next-line @next/next/no-img-element
export default function AboutUs() {
    return (
        <section>
            <div className='flex container mt:20 mb-32 lg:mt-0 h-56 lg:h-144 w-full font-inter items-center'>
                <div className='w-full flex flex-col lg:flex-row items-center justify-center lg:space-x-20'>
                    <div className='hidden items-center text-center lg:w-1/2 lg:flex'>
                        <img src='https://purepng.com/public/uploads/large/11232131312312-eke.png'
                            alt="hero fide resim" className="object-contain lg:w-full h-72 lg:h-144" />
                    </div>
                    <div className='items-center text-center lg:hidden'>
                        <img src='https://media.istockphoto.com/id/1449871356/tr/foto%C4%9Fraf/beautiful-plants-in-ceramic-pots-isolated-on-transparent-background-3d-rendering.jpg?s=1024x1024&w=is&k=20&c=PV3_xYou_NwgETYchVtExFFOHDrzwpSPvaYEPAtI_NQ='
                            alt="hero fide resim" className="object-contain lg:w-full h-72" />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <h1 className='font-bold font-inter ml-4 sm:text-2xl lg:text-4xl lg:ml-16'>Lorem ipsum dolor sit amet
                            <span className='text-primary-green'> consectetur </span> adipisicing elit.
                        </h1>
                        <p className='font-inter mt-4 ml-4 lg:ml-16 text-sm sm:text-base lg:text-lg'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta molestias aut, quidem repellat, laboriosam nemo aliquid animi illo ipsam culpa vitae dicta, esse amet beatae alias quos asperiores eius atque.
                        </p>
                        <div className="w-full text-center lg:text-left">
                            <button className="lg:ml-16 rounded mt-8 bg-primary-gray p-3 text-lg lg:text-xl font-semibold
                hover:bg-primary-green hover:text-primary-black">Join Us!</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}