import { Blob } from "../Blob"

export default function Banner() {

    return(
        <section className="banner relative h-auto">
        {/* <div className="header-text">Nike ZoomX Streakfly</div> */}
        <div className="container flex lg:flex-row flex-col">
          <div className="lg:columns-6 flex flex-col lg:w-3/6 relative px-[15px]">
            <h5 className="block font-bold text-[24px]">
              <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                Road Racing Shoes
              </div>
            </h5>
            <h1 className="inline-block my-6 font-anton font-black text-[50px] sm:text-[69px]  md:text-[90px] lg:text-[120px] leading-[1.2]">
              Nike ZoomX <br /> Streakfly
            </h1>
            <p className="font-medium text-[14px] text-gray2 hidden lg:block leading-[3] mb-4 pb-1">
              Our lightest racing shoe, the Nike ZoomX Streakfly is all about
              the
              <br />
              speed you need to take on the competition in a mile, 5K or 10K
              race.
            </p>
            <div className="lg:flex items-center hidden my-6">
              <div className="wrapper__select-input relative inline-block">
                <select className="select font-anton text-[32px] font-[32px]">
                  <option disabled hidden>QNT</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="wrapper__select-input relative inline-block mx-6">
                <select className="select font-anton text-[32px] font-[32px]">
                  <option disabled hidden>SIZE</option>
                  <option>28</option>
                  <option>32</option>
                  <option>45</option>
                </select>
              </div>
              <h5 className="font-extrabold text-[32px]">$173</h5>
            </div>
            <div className="lg:flex items-center hidden pt-6">
              <a
                href="#!"
                className="hover:shadow-[0_15px_30px_rgba(16,13,34,0.5)] border-0 rounded-[50px] px-[60px] py-[21px] bg-black hover:shadow-2xl
                text-[14px] text-white text-center font-semibold relative z-99"
              >
                Add to Bag
              </a>
              <a
                href="#!"
                className="border-b-black border-b-2 ml-6 font-medium text-sm color-black"
              >
                See Details
              </a>
            </div>
          </div>
          <div className="columns-12 lg:columns-6 relative lg:w-3/6 px-[15px] flex items-center lg:items-start justify-center overflow-hidden">
            <div className="wrapper_blob flex items-start justify-center absolute -z-50 w-full lg:w-[700px]">
              <Blob />
            </div>
            <div className="wrapper_image relative flex items-start justify-center">
              <img src="/images/nike-shoe-right.png" className="w-[700px] ]lg:mt-8" />
            </div>
          </div>
          <div className="lg:hidden flex items-center pt-6">
            <a
              href="#!"
              className="hover:shadow-[0_15px_30px_rgba(16,13,34,0.5)] border-0 rounded-[50px] px-[60px] py-[21px] bg-black hover:shadow-2xl
                text-[14px] text-white text-center font-semibold relative z-99"
            >
              Add to Bag
            </a>
            <a
              href="#!"
              className="border-b-black border-b-2 ml-6 font-medium text-sm color-black"
            >
              See Details
            </a>
          </div>
        </div>
      </section>
    )
}