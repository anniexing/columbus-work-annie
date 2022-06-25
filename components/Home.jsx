import dynamic from 'next/dynamic';
const Home = dynamic(() => import("./Product"), {
  ssr: false,
});

export default Home;
