import map from '../../../assets/images/map.png'
const AboutNigeria = () => {
  return (
    <>
    <section className='flex items-center h-screen py-10 px-12 w-full bg-black text-white'>
        <div className="left w-1/2">
            <img src={map} alt="map of Nigeria" className='w-full'/>
        </div>
        <div className="right w-1/2 space-y-4">
            <h2 className='text-center' >Just a little about <span className='text-green-700 border-b-4 border-green-700'>Nigeria</span> </h2>
            <p className=' text-justify space-y-2'>
                <p>
                    Welcome to Nigeria, where vibrant cultures, bustling cities, and breathtaking landscapes converge to create an unforgettable tapestry of experiences. From the energetic streets of Lagos, Africa&apos;s largest metropolis, pulsating with music and entrepreneurship, to the historic city of Kano, where ancient traditions blend seamlessly with modern innovations, Nigeria is a nation of contrasts and dynamism.
                </p>
                
                <p>
                    Explore the diverse landscapes that range from lush rainforests teeming with exotic wildlife to expansive savannas stretching as far as the eye can see. Marvel at the majestic beauty of Yankari National Park, where elephants roam freely against a backdrop of cascading waterfalls and rugged terrain.
                </p>
                <p>
                    Indulge your senses in the rich flavors of Nigerian cuisine, from the spicy heat of suya to the comforting warmth of jollof rice. Experience the warmth and hospitality of the Nigerian people, known for their vibrant spirit and zest for life.
                </p>
                
                <p>
                    Discover the cultural heritage of Nigeria through its art, music, and festivals, where age-old traditions come alive in colorful celebrations. Immerse yourself in the rhythms of Afrobeat, Nigeria&apos;s iconic musical genre that has captivated audiences around the world.
                </p>

                <p>
                    Whether you&apos;re exploring the vibrant markets of Abuja, embarking on a safari adventure in the wilds of the North, or unwinding on the sun-kissed beaches of Lagos, Nigeria promises an exhilarating journey filled with warmth, diversity, and endless possibilities. Welcome to Nigeria, where every moment is a celebration of life!
                </p>

               
            </p>
        </div>
    </section>
    </>
  )
}

export default AboutNigeria