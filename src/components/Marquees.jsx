import Marquee from 'react-fast-marquee';

function Marquees() {
  return (
    <div className='text-pink-500 bg-gray-50 text-xl border-b border-gray-300 py-1'>
      <Marquee speed={90} gradient={false}>
  🎉 Get 10% Off on Your First Balloon Decoration! &nbsp;|&nbsp;
  ✨ Turning Dreams into Elegant Celebrations ✨ &nbsp;|&nbsp;
  🎈 Birthday • Anniversary • Baby Welcome • Haldi • Mehndi Decorations &nbsp;|&nbsp;
  📍 Now Serving Noida &nbsp;|&nbsp;
  🛕 Visit Us: Noida sector 49.  Noida &nbsp;|&nbsp;
  📞 Call Now: +91 9896860316 &nbsp;|&nbsp;
  🕒 24×7 Booking Available
</Marquee>
    </div>
  );
}

export default Marquees;
