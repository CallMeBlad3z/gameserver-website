import cs2Img from '/public/cs2bg.png';
import tf2Img from '/public/tf2bg.png';
import Hero from '@/components/hero';
import InfoSection from '@/components/infosection';

export default function Home() {
  return (
    <div>
      <Hero 
        imgData1={cs2Img}
        imgData2={tf2Img}
        imgAlt="CS2 Background Image"
        title="" 
      />
      <InfoSection />
    </div>
  );
}
