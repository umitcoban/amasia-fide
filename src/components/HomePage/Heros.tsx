/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element
// eslint-disable-next-line @next/next/no-img-element
export default function Heros() {
  return (
    <section className="text-primary-black body-font container">
      <div className="mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 text-primary-black font-bold">
            Before they sold out <span className="text-primary-green">readymade gluten</span>
          </h1>
          <p className="mb-8 leading-relaxed font-semibold">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-primary-black font-bold bg-primary-gray border-0 py-2 px-6 focus:outline-none hover:bg-primary-green rounded text-xl text-center">
              Shop now!</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="https://www.shutterstock.com/image-illustration/3d-illustration-palm-trees-pot-600w-755768542.jpg" />
        </div>
      </div>
    </section>
  )
}