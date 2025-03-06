import cs2Img from '/public/cs2bg_big.jpeg';
import tf2Img from '/public/tf2bg_big.png';
import Hero from '@/components/hero';
import InfoSection from '@/components/info-section';

export default function Home() {
  return (
    <div>
      <Hero 
        imgData1={cs2Img}
        imgData2={tf2Img}
        imgAlt="Background Image"
        title="PeliTupa" 
      />
      <div className="xl:hidden">
        <InfoSection />
      </div>
    </div>
  );
}
