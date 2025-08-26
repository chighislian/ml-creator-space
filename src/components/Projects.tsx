import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import project1Image from '@/assets/project-1.jpg';
import project2Image from '@/assets/project-2.jpg';
import project3Image from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Built a Random Forest model to predict customer churn with 89% accuracy. Implemented feature engineering and model optimization techniques.",
      image: project1Image,
      technologies: ["Python", "scikit-learn", "Pandas", "Random Forest"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Stock Price Forecasting",
      description: "Time-series LSTM model to forecast stock movement. Utilized deep learning techniques for financial market prediction.",
      image: project2Image,
      technologies: ["Python", "TensorFlow", "LSTM", "Time Series"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Cybersecurity Awareness Classifier",
      description: "Random Forest model with 89.14% accuracy deployed on Django. Classifies cybersecurity threats and awareness levels.",
      image: project3Image,
      technologies: ["Python", "Django", "Random Forest", "Security"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my data science and machine learning projects, demonstrating practical applications and technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="aspect-video overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>

                <p className="text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 hover:bg-primary hover:text-white transition-smooth"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center gap-2 hero-gradient text-white hover:opacity-90 transition-smooth"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;