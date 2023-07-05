import React from 'react'
import {useState} from 'react'
import SimpleImageSlider from 'react-simple-image-slider'


const Homepage = () => {
  const [imageNum, setImageNum] = useState(1);
   const sliderImages = [
      {
         url: "https://images.theconversation.com/files/496080/original/file-20221118-14-4r4lvk.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop",
      },
      {
         url: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/08/childTakeMedicine-614860746-770x533-1-650x428.jpg",
      },
      {
         url: "https://hips.hearstapps.com/hmg-prod/images/best-common-cold-medicine-1533228655.jpg?crop=1xw:0.8523454157782516xh;center,top&resize=1200:*",
      },
      {
         url: "https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg?w=900&t=st=1688387625~exp=1688388225~hmac=e06b82bd3796da94060e61dbd2344262a7754c0b93d79a8995258d7ccad2b18e",
      },

   ];
  
   return (
    <div>
       <center><h1>MEDICINE DETAILS.</h1>
       <SimpleImageSlider
          width={1050}
          height={450}
          images={sliderImages}
          showBullets={true}
          showNavs={true}
          autoPlay={true} 
          onStartSlide = {(index) => {
             setImageNum(index);
          }}
             autoPlayDelay = {4}
       />
       {imageNum}
       </center>
    </div>
 );
}
export default Homepage