import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const Resume = () => {
  const education = [
    {
      degree: "M.Sc. Data Science",
      institution: "[University Name]",
      year: "Year",
      description: "Advanced coursework in machine learning, statistical analysis, and data mining."
    },
    {
      degree: "B.Sc. Computer Science",
      institution: "Federal University of Technology Owerri",
      year: "Year",
      description: "Strong foundation in programming, algorithms, and software engineering principles."
    }
  ];

  const experience = [
    {
      title: "Machine Learning Research Assistant",
      company: "[University or Lab]",
      period: "dates",
      description: "Built predictive models, worked with Python, scikit-learn, and TensorFlow.",
      achievements: [
        "Developed machine learning models with high accuracy rates",
        "Collaborated on research projects using advanced ML algorithms",
        "Published findings in academic conferences"
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "Ego Beke LTD",
      period: "dates",
      description: "Analyzed customer data, prepared reports, supported decision-making.",
      achievements: [
        "Processed and analyzed large datasets to identify trends",
        "Created comprehensive reports for executive decision-making",
        "Improved data collection processes by 30%"
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My educational background and professional experience in data science and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="card-gradient rounded-xl p-6 shadow-soft border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                      <p className="text-primary font-medium mb-1">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{edu.year}</span>
                      </div>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Briefcase className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="card-gradient rounded-xl p-6 shadow-soft border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Briefcase className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{exp.title}</h4>
                      <p className="text-accent font-medium mb-1">{exp.company}</p>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;