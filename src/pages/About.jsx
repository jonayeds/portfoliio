import image from  "../assets/images/profile.jpg"
const About = () => {
  return (
    <div className="h-screen w-full z-40 lg:px-20">
      <div className="flex items-center justify-center  lg:gap-36 pt-32 lg:max-w-screen-2xl  mx-auto relative px-5 ">
        <div className="lg:max-w-2xl z-10   ">
        <h1 className=" text-[10rem] lg:text-center font-heading   h-full tracking-[8px] ">About</h1>
        <p className="font-body text-3xl font-light  tracking-[2px] leading-[45px]  ">I`m Sajjad Jonayed. A Fullstack wev developer, problem solver, creative thinker.</p>
        </div>
        <div className="lg:w-96 lg:h-96 w-[60vw]  absolute lg:static    overflow-hidden rounded-2xl right-5 top-24">
          <img src={image} className="w-full  " alt="" />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto  font-body tracking-[2px] font-light lg:mt-10 md:mt-36 mt-10 leading-[28px] px-5">
        <p>A passionate and dedicated web developer with a strong background in creating dynamic and responsive websites. With a blend of technical skills, creativity, and a keen eye for design, I transform ideas into engaging and functional digital experiences. My journey into web development began when I started my bachelor degree and started to learn how things work on the internet. This curiosity led me to learn Web Development, where I honed my skills in various web technologies. I have worked on many projects that have challenged me to push the boundaries of what`s possible on the web. Now I`m expert in HTML, CSS, and JavaScript, with extensive experience in frameworks like React and Tailwind css. Also backend technologies like express js, Node js and MongoDB as database</p>
      </div>
    </div>
  );
};

export default About;
