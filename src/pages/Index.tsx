
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import DataVisualization from "@/components/data-visualization";
import SectionHeading from "@/components/ui/section-heading";
import SkillCard from "@/components/skill-card";
import ProjectCard from "@/components/project-card";
import ExperienceCard from "@/components/experience-card";
import ContactForm from "@/components/contact-form";
import SkillChart from "@/components/skill-chart";
import { 
  Database, Server, BarChart3, Code, Figma, 
  BrainCircuit, Globe, LineChart
} from "lucide-react";

const skillCategories = [
  { name: "Data Science", value: 90 },
  { name: "Web Dev", value: 85 },
  { name: "Data Viz", value: 95 },
  { name: "Design", value: 75 },
  { name: "ML", value: 80 },
];

const Index = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
    about: false,
    skills: false,
    projects: false,
    experience: false,
    contact: false,
  });
  
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (id) {
          setIsVisible((prev) => ({
            ...prev,
            [id]: entry.isIntersecting,
          }));
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <DataVisualization />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-gradient-blue">Ashutosh Gadekar</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-8">
              Data Science Enthusiast & Full-Stack Developer
            </h2>
            <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
              Transforming data into insights and ideas into digital experiences
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-neon-blue text-black font-medium rounded-md hover:bg-opacity-90 transition-all-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-neon-blue text-neon-blue font-medium rounded-md hover:bg-neon-blue/10 transition-all-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-foreground/50 hover:text-foreground transition-all-300">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>
      
      {/* About Section */}
      <section 
        id="about" 
        ref={sectionRefs.about}
        className="py-20 bg-gradient-to-b from-background to-background/90"
      >
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="About Me" 
            subtitle="I am a data-driven full-stack developer with a passion for creating interactive and insightful digital experiences."
          />
          
          <div className={`glass p-8 rounded-lg max-w-4xl mx-auto transition-all duration-700 ${isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <img 
                  src="/placeholder.svg" 
                  alt="Ashutosh Gadekar" 
                  className="w-full rounded-lg object-cover aspect-square border border-white/10"
                />
              </div>
              <div className="md:col-span-2 flex flex-col justify-center">
                <p className="text-foreground/80 mb-6">
                  As a Data Science intern at Baap Company, I specialize in creating powerful data visualizations and developing web applications that transform complex data into actionable insights.
                </p>
                <p className="text-foreground/80 mb-6">
                  My expertise spans across the full data science and development stack, from data analysis and machine learning algorithms to creating responsive front-end interfaces and robust back-end systems.
                </p>
                <p className="text-foreground/80">
                  I believe in the power of combining analytical skills with creative problem-solving to deliver solutions that not only look great but also provide real value through data-driven insights.
                </p>
                
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient-blue">2+</div>
                    <div className="text-sm text-foreground/60">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient-blue">15+</div>
                    <div className="text-sm text-foreground/60">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient-blue">10+</div>
                    <div className="text-sm text-foreground/60">Data Reports</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient-blue">5+</div>
                    <div className="text-sm text-foreground/60">ML Models</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section 
        id="skills" 
        ref={sectionRefs.skills}
        className="py-20 bg-grid"
      >
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Skills & Expertise" 
            subtitle="My technical toolkit includes a diverse range of skills across data science, web development, and design."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <SkillCard 
                  icon={BrainCircuit} 
                  name="Data Science" 
                  level={9} 
                  className={`transition-all duration-700 delay-100 ${isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                />
                <SkillCard 
                  icon={Globe} 
                  name="Web Development" 
                  level={8.5} 
                  className={`transition-all duration-700 delay-200 ${isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                />
                <SkillCard 
                  icon={BarChart3} 
                  name="Data Visualization" 
                  level={9.5} 
                  className={`transition-all duration-700 delay-300 ${isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                />
                <SkillCard 
                  icon={Figma} 
                  name="UI/UX Design" 
                  level={7.5} 
                  className={`transition-all duration-700 delay-400 ${isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                />
              </div>
              
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className={`glass p-4 rounded-lg text-center transition-all duration-700 delay-500 ${isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                  <Database className="inline-block text-neon-blue mb-2" size={24} />
                  <div>SQL</div>
                </div>
                <div className={`glass p-4 rounded-lg text-center transition-all duration-700 delay-600 ${isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                  <Code className="inline-block text-neon-blue mb-2" size={24} />
                  <div>Python</div>
                </div>
                <div className={`glass p-4 rounded-lg text-center transition-all duration-700 delay-700 ${isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                  <Server className="inline-block text-neon-blue mb-2" size={24} />
                  <div>Node.js</div>
                </div>
                <div className={`glass p-4 rounded-lg text-center transition-all duration-700 delay-800 ${isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                  <LineChart className="inline-block text-neon-blue mb-2" size={24} />
                  <div>Power BI</div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-700 delay-500 ${isVisible.skills ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <SkillChart categories={skillCategories} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section 
        id="projects" 
        ref={sectionRefs.projects}
        className="py-20 bg-gradient-to-b from-background/90 to-background"
      >
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="A selection of my recent work across data science, web development, and UI/UX design."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Sales Dashboard"
              description="Interactive Power BI dashboard for real-time sales analytics and performance tracking."
              image="/placeholder.svg"
              technologies={["Power BI", "DAX", "SQL"]}
              githubLink="#"
              liveLink="#"
              className={`transition-all duration-700 delay-100 ${isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            />
            <ProjectCard
              title="E-commerce Platform"
              description="Full-stack e-commerce platform with customer analytics and inventory management."
              image="/placeholder.svg"
              technologies={["React", "Node.js", "MongoDB", "Express"]}
              githubLink="#"
              liveLink="#"
              className={`transition-all duration-700 delay-200 ${isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            />
            <ProjectCard
              title="Customer Segmentation"
              description="Machine learning model for customer segmentation and personalized marketing."
              image="/placeholder.svg"
              technologies={["Python", "scikit-learn", "Pandas", "Matplotlib"]}
              githubLink="#"
              className={`transition-all duration-700 delay-300 ${isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            />
            <ProjectCard
              title="Social Media Analytics"
              description="Tool for analyzing social media data and visualizing engagement metrics."
              image="/placeholder.svg"
              technologies={["D3.js", "React", "Python", "API Integration"]}
              githubLink="#"
              liveLink="#"
              className={`transition-all duration-700 delay-400 ${isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            />
            <ProjectCard
              title="Healthcare App UI"
              description="Modern healthcare application interface designed for optimal user experience."
              image="/placeholder.svg"
              technologies={["Figma", "UI/UX", "Prototype"]}
              liveLink="#"
              className={`transition-all duration-700 delay-500 ${isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            />
            <ProjectCard
              title="Predictive Maintenance"
              description="ML system for predicting equipment failures in manufacturing environments."
              image="/placeholder.svg"
              technologies={["Python", "TensorFlow", "IoT", "Data Analysis"]}
              githubLink="#"
              className={`transition-all duration-700 delay-600 ${isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            />
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section 
        id="experience" 
        ref={sectionRefs.experience}
        className="py-20 bg-grid"
      >
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Work Experience" 
            subtitle="My professional journey in the fields of data science and web development."
          />
          
          <div className="max-w-4xl mx-auto">
            <ExperienceCard
              company="Baap Company"
              position="Data Science Intern"
              duration="Jan 2023 - Present"
              location="Remote"
              description={[
                "Developed interactive Power BI dashboards for business analytics, improving decision-making efficiency by 35%.",
                "Created machine learning models for customer segmentation and predictive analysis.",
                "Collaborated with cross-functional teams to implement data-driven solutions.",
                "Optimized data pipelines to reduce processing time by 40%."
              ]}
              className={`transition-all duration-700 delay-100 ${isVisible.experience ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            />
            
            <ExperienceCard
              company="Tech Solutions Inc."
              position="Web Development Intern"
              duration="May 2022 - Dec 2022"
              location="Pune, India"
              description={[
                "Built responsive web applications using React.js and Node.js.",
                "Implemented RESTful APIs for data exchange between front-end and back-end systems.",
                "Participated in UI/UX design sessions to enhance user experience.",
                "Maintained and optimized database queries for improved performance."
              ]}
              className={`transition-all duration-700 delay-300 ${isVisible.experience ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            />
            
            <ExperienceCard
              company="DataViz Labs"
              position="Data Visualization Freelancer"
              duration="Jan 2022 - Apr 2022"
              location="Remote"
              description={[
                "Created custom data visualizations for clients using D3.js and Power BI.",
                "Transformed complex datasets into intuitive visual representations.",
                "Provided consultation on best practices for data visualization and storytelling.",
                "Delivered projects on time and within scope for multiple clients."
              ]}
              className={`transition-all duration-700 delay-500 ${isVisible.experience ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section 
        id="contact" 
        ref={sectionRefs.contact}
        className="py-20 bg-gradient-to-b from-background to-background/90"
      >
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Get In Touch" 
            subtitle="Have a project in mind or just want to connect? Feel free to reach out."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className={`transition-all duration-700 delay-100 ${isVisible.contact ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <div className="glass p-6 rounded-lg h-full">
                <h3 className="text-2xl font-bold mb-6 text-gradient-blue">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-muted rounded-full p-2 mr-4">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-neon-blue"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground/50 mb-1">Phone</h4>
                      <p className="text-foreground">+91 9876543210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-muted rounded-full p-2 mr-4">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-neon-blue"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground/50 mb-1">Email</h4>
                      <p className="text-foreground">ashutosh@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-muted rounded-full p-2 mr-4">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-neon-blue"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground/50 mb-1">Location</h4>
                      <p className="text-foreground">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="text-sm font-medium text-foreground/50 mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-muted p-3 rounded-full hover:bg-neon-blue/20 transition-all-300"
                      aria-label="GitHub"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-neon-blue"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-muted p-3 rounded-full hover:bg-neon-blue/20 transition-all-300"
                      aria-label="LinkedIn"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-neon-blue"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-muted p-3 rounded-full hover:bg-neon-blue/20 transition-all-300"
                      aria-label="Twitter"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-neon-blue"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-700 delay-300 ${isVisible.contact ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
