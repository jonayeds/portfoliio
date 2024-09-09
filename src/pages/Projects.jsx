const Projects = () => {
  return (
    <div className="min-h-screen w-screen bg-light lg:px-24 px-4 md:px-10">
      <div className="w-full text-center h-full flex items-end justify-around flex-col md:flex-row pt-32">
        <div className="mx-auto">
          <h1 className="text-7xl font-heading font-[100] tracking-[8px]  uppercase ">
            Projets
          </h1>
          <p className="max-w-xl font-body tracking-[1.2px] mt-4s">
            This is a showcase of my best work in a variety of fields including
            Graphic and Web Design, No-Code Development, Product Design and
            Product Management. The world of digital design and development is
            constantly evolving and so has my role over the last 15 years. I’m
            still learning and gaining new skills every day.
          </p>
        </div>
        <div  className="md:px-10 font-body  uppercase tracking-[2px] md:tracking-[6px] md:text-[6vh] text-[5vh] font-[100] py-10 md:py-0 mx-auto">
          <h1 className=" py-7 border-b-2  border-[#1a1a1a]">UNILINK</h1>
          <h1 className=" py-7 border-b-2 border-[#1a1a1a]">Youshare</h1>
          <h1 className=" py-7 border-b-2 border-[#1a1a1a]">travelia</h1>
          <h1 className=" py-7 border-b-2 border-[#1a1a1a]">backpackers.</h1>

          <h1 className=" py-7 border-b-2 border-[#1a1a1a]">Aultly</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
