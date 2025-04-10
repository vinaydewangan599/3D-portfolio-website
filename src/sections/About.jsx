import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('vinaydewangan599@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Vinay Dewangan</p>
              <p className="grid-subtext">
              With 2 years of hands-on experience in both frontend and backend development, I’ve built dynamic, responsive websites that deliver seamless user experiences and robust performance.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/Education2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Bachelor Degree</p>
              <p className="grid-subtext">
                National Institute of Technology, Raipur, India (2021 - 2025)
              </p>
              <p className="grid-headtext">Senior Secondary School (CBSE)</p>
              <p className="grid-subtext">
                Davara International School, Raipur, India (2019)
              </p>
              
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
            <Globe
              height={326}
              width={326}
              backgroundColor="rgba(0, 0, 0, 0)"
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              labelsData={[
                {
                  lat: 21.2514,
                  lng: 81.6296,
                  text: 'Kota, Raipur, Chhattisgarh, India',
                  color: 'white',
                  size: 15,
                },
              ]}
            />
                        </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m Based in Raipur, Chhattisgarh, India, I'm open to remote work as well as on-site opportunities, depending on the location and project requirements.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
            <div className="flex justify-between mt-4 w-1/2 mx-auto">
              <div className="flex flex-col items-center">
                <a href="https://leetcode.com/u/vinaydewangannew" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                  <img src="assets/leetcode-logo.png" alt="LeetCode" className="w-10 h-10 object-contain transition-transform hover:scale-110" />
                  <p className="text-neutral-400 font-bold text-sm mt-2 hover:text-white transition-colors">LeetCode</p>
                </a>
              </div>
              <div className="flex flex-col items-center">
                <a href="https://www.geeksforgeeks.org/user/vinaydewangannew/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                  <img src="assets/gfg-logo.png" alt="GeeksforGeeks" className="w-10 h-10 object-contain transition-transform hover:scale-110" />
                  <p className="text-neutral-400 font-bold text-sm mt-2 hover:text-white transition-colors">GeeksforGeeks</p>
                </a>
              </div>
              <div className="flex flex-col items-center">
                <a href="https://github.com/vinaydewangan599" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                  <img src="assets/github.svg" alt="GitHub" className="w-10 h-10 object-contain transition-transform hover:scale-110" />
                  <p className="text-neutral-400 font-bold text-sm mt-2 hover:text-white transition-colors">GitHub</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-1xl md:text-xl font-medium text-gray_gradient text-white">vinaydewangan599@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
