import adaniLogo from "../../Assets/Quartz/logo1.png";
import piramalLogo from "../../Assets/Quartz/logo2.png";
const projects = [
  { name: 'Adani Realty', logo: adaniLogo },
  { name: 'Piramal Realty', logo: piramalLogo },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center my-24 px-4 md:px-6 lg:px-10">
      {/* Trust Badge */}
      <p className="text-orange-500 text-sm mb-8 font-medium tracking-wide">
        Trusted by Leading Builders Worldwide.
      </p>
      
      {/* Main Title */}
      <div className="relative md:mb-16 mb-4">
        <h1 className="xl:text-8xl md:text-6xl text-2xl font-light text-gray-800 tracking-wider text-center">
          PROJECTS
        </h1>
        
        {/* Small logos positioned over the title */}
        <div className="absolute inset-0 md:flex hidden justify-center">
          <div className=" ">
            <img 
              src={piramalLogo} 
              alt="Adani Realty" 
              className="object-contain absolute -left-24 bottom-10 opacity-60"
            />
            
          </div>
          <div className="flex justify-center ">
            <img 
              src={adaniLogo} 
              alt="Adani Realty" 
              className="object-contain absolute mx-auto lg:top-6 top-2 opacity-60"
            />
            
          </div>
          <div className=" ">
            <img 
              src={piramalLogo} 
              alt="Adani Realty" 
              className="object-contain absolute -right-24 top-10 opacity-60"
            />
            
          </div>
        </div>
      </div>

      {/* Logo Grid */}
      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-x-12 md:gap-y-8 ">
        {/* Row 1 */}
        <div className="flex flex-col items-center space-y-2">
          <img src={adaniLogo} alt="Adani Realty" className="object-contain" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src={piramalLogo} alt="Piramal Realty" className="object-contain" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src={adaniLogo} alt="Adani Realty" className="object-contain" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src={piramalLogo} alt="Piramal Realty" className="object-contain" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src={adaniLogo} alt="Adani Realty" className="object-contain" />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col items-center space-y-2">
          <img src={adaniLogo} alt="Adani Realty" className="object-contain" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src={piramalLogo} alt="Piramal Realty" className="object-contain" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src={adaniLogo} alt="Adani Realty" className="object-contain" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src={piramalLogo} alt="Piramal Realty" className="object-contain" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src={adaniLogo} alt="Adani Realty" className="object-contain" />
        </div>

        {/* Row 3 */}
        <div className="flex flex-col items-center space-y-2">
          <img src={adaniLogo} alt="Adani Realty" className="object-contain" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src={piramalLogo} alt="Piramal Realty" className="object-contain" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src={adaniLogo} alt="Adani Realty" className="object-contain" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src={piramalLogo} alt="Piramal Realty" className="object-contain" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <img src={adaniLogo} alt="Adani Realty" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;