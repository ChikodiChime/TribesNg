import HeroSlider from "../../ui/HeroSlider/HeroSlider"

const HeroSection = () => {
  return (
    <>
    <div className=" relative flex  items-center px-12 " style={{height: 'calc(100vh - 100px)'}}>
        <div className="w-[50%] px-10">
            <h1 >WELCOME TO NIGERIA</h1>
            <p>Nigeria, a developing country, yet, one of the most exciting places to be. Filled with colorful cultures, filled with the friendliest, yet the most savage people. People who know how to have fun in a way you have never seen, people who keep to the traditions of their ancestors. Nigeria is not just a place, it is one big community, brimmed with diversity, spice and love.</p>
        </div>
        <div className="w-[40%] flex items-center justify-end h-full">
            <HeroSlider/>
        </div>
        
    </div>
    </>
  )
}

export default HeroSection