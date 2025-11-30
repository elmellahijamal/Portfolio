import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Briefcase, GraduationCap, Award, ChevronRight, Terminal, Rocket, Languages, Download } from 'lucide-react';
import { skills, experience, education, projects, certifications, personalInfo } from './data/portfolioData';
import { translations } from './data/translations';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [language, setLanguage] = useState('fr'); // 'fr' or 'en'

  const t = translations[language]; // Translation helper

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="portfolio-container">
      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />
      
      {/* Animated Background */}
      <div className="bg-grid" />
      <div className="bg-gradient" />

      {/* Language Toggle Button */}
      <button
        className="language-toggle"
        onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
        aria-label="Toggle Language"
      >
        <Languages size={20} />
        <span>{language === 'fr' ? 'EN' : 'FR'}</span>
      </button>

      {/* Hero Section */}
      <section className={`hero-section ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-content">
          <div className="hero-badge">
            <Terminal size={16} />
            <span>{t.availableForOpportunities}</span>
          </div>

          <h1 className="hero-title" style={{ animationDelay: '0.1s' }}>
            MOHAMED JAMAL <span className="gradient-text">EL MELLAHI</span>
          </h1>

          <div className="hero-subtitle" style={{ animationDelay: '0.5s' }}>
            <Code className="inline-icon" />
            <span>{language === 'fr' ? personalInfo.title : personalInfo.titleEn}</span>
            <span className="separator">|</span>
            <span>.NET • React • TypeScript</span>
          </div>

          <p className="hero-description" style={{ animationDelay: '0.7s' }}>
            {t.heroDescription}
          </p>

          <div className="hero-cta" style={{ animationDelay: '0.9s' }}>
            <a href="#contact" className="cta-primary">
              <span>{t.getInTouch}</span>
              <ChevronRight size={20} />
            </a>
            <a href="#projects" className="cta-secondary">
              <span>{t.viewProjects}</span>
              <Rocket size={20} />
            </a>
          </div>
          
          <div className="hero-socials" style={{ animationDelay: '1.1s' }}>
            <a href="https://github.com/elmellahijamal" className="social-link" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jamal-el-mellahi/" className="social-link" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="mailto:melmellahijamal@gmail.com" className="social-link">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card card-1">
            <Code size={32} />
            <span>{t.cleanCode}</span>
          </div>
          <div className="floating-card card-2">
            <Briefcase size={32} />
            <span>{t.projectsCount}</span>
          </div>
          <div className="floating-card card-3">
            <Award size={32} />
            <span>{t.certificationsCount}</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">01.</span>
            {t.technicalArsenal}
          </h2>
          <div className="title-line-decoration" />
        </div>
        
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], idx) => (
            <div 
              key={category} 
              className="skill-category"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="category-title">
                {t[category] || category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <div className="skill-tags">
                {items.map((skill, i) => (
                  <span 
                    key={skill} 
                    className="skill-tag"
                    style={{ animationDelay: `${(idx * 0.1) + (i * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section" id="experience">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">02.</span>
            {t.professionalJourney}
          </h2>
          <div className="title-line-decoration" />
        </div>

        <div className="experience-timeline">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className={`experience-card ${exp.current ? 'current' : ''}`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {exp.current && <div className="current-badge">{t.current}</div>}
              <div className="exp-header">
                <h3 className="exp-role">{language === 'fr' ? exp.role : exp.roleEn}</h3>
                <span className="exp-period">{language === 'fr' ? exp.period : exp.periodEn}</span>
              </div>
              <div className="exp-company">
                <Briefcase size={16} />
                <span>{exp.company}</span>
              </div>
              <div className="exp-location">
                <MapPin size={16} />
                <span>{language === 'fr' ? exp.location : exp.locationEn}</span>
              </div>
              {exp.description && (
                <div className="exp-description">
                  <p>{language === 'fr' ? exp.description : exp.descriptionEn}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section" id="education">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">03.</span>
            {t.education}
          </h2>
          <div className="title-line-decoration" />
        </div>

        <div className="education-timeline">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className={`education-card ${edu.current ? 'current' : ''}`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {edu.current && <div className="current-badge">{t.currentYear}</div>}
              <div className="edu-header">
                <h3 className="edu-degree">{language === 'fr' ? edu.degree : edu.degreeEn}</h3>
                <span className="edu-period">{language === 'fr' ? edu.period : edu.periodEn}</span>
              </div>
              <div className="edu-school">
                <GraduationCap size={16} />
                <span>{edu.school}</span>
              </div>
              <div className="edu-location">
                <MapPin size={16} />
                <span>{language === 'fr' ? edu.location : edu.locationEn}</span>
              </div>
              <div className="edu-year">
                <span>{language === 'fr' ? edu.year : edu.yearEn}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">04.</span>
            {t.featuredProjects}
          </h2>
          <div className="title-line-decoration" />
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card"
              style={{
                animationDelay: `${idx * 0.1}s`,
                '--accent-color': project.color
              }}
            >
              <div className="project-type">{language === 'fr' ? project.type : project.typeEn}</div>
              <h3 className="project-title">{language === 'fr' ? project.title : project.titleEn}</h3>
              <p className="project-description">{language === 'fr' ? project.description : project.descriptionEn}</p>
              <div className="project-tech">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-link">
                <ExternalLink size={18} />
                <span>{t.viewDetails}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section" id="certifications">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">05.</span>
            {t.certifications}
          </h2>
          <div className="title-line-decoration" />
        </div>
        
        <div className="cert-grid">
          {certifications.map((cert, idx) => (
            <div 
              key={idx} 
              className="cert-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <Award className="cert-icon" />
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-content">
          <h2 className="contact-title">{t.contactTitle}</h2>
          <p className="contact-subtitle">
            {t.contactSubtitle}
          </p>

          <div className="contact-methods">
            <a href={`mailto:${personalInfo.email}`} className="contact-method">
              <Mail size={24} />
              <div className="method-details">
                <span className="method-label">{t.email}</span>
                <span className="method-value">{personalInfo.email}</span>
              </div>
            </a>

            <a href={`tel:${personalInfo.phone}`} className="contact-method">
              <Phone size={24} />
              <div className="method-details">
                <span className="method-label">{t.phone}</span>
                <span className="method-value">{personalInfo.phone}</span>
              </div>
            </a>

            <div className="contact-method">
              <MapPin size={24} />
              <div className="method-details">
                <span className="method-label">{t.location}</span>
                <span className="method-value">{language === 'fr' ? personalInfo.location : personalInfo.locationEn}</span>
              </div>
            </div>
          </div>

          <div className="cv-download-section">
            <h3 className="cv-title">{t.downloadCV}</h3>
            <div className="cv-buttons">
              <a href={personalInfo.cvFr} download className="cv-button cv-fr">
                <Download size={20} />
                <span>CV Français</span>
              </a>
              <a href={personalInfo.cvEn} download className="cv-button cv-en">
                <Download size={20} />
                <span>CV English</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>{t.designedBy}</p>
        <p>© 2025 {t.allRightsReserved}</p>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #00D9FF;
          --secondary: #FF006E;
          --accent: #FFBE0B;
          --purple: #8338EC;
          --dark: #0A0E27;
          --darker: #050814;
          --light: #F8F9FA;
          --gray: #8892B0;
        }

        .portfolio-container {
          background: var(--darker);
          color: var(--light);
          font-family: 'Space Mono', 'Courier New', monospace;
          overflow-x: hidden;
          position: relative;
        }

        /* Custom Cursor */
        .custom-cursor {
          width: 20px;
          height: 20px;
          border: 2px solid var(--primary);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: width 0.2s, height 0.2s, border-color 0.2s;
          mix-blend-mode: difference;
        }

        /* Animated Background */
        .bg-grid {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 217, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 0;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .bg-gradient {
          position: fixed;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 50% 50%, 
            rgba(0, 217, 255, 0.1) 0%,
            rgba(255, 0, 110, 0.1) 25%,
            rgba(131, 56, 236, 0.1) 50%,
            transparent 70%);
          animation: gradientRotate 30s linear infinite;
          z-index: 0;
        }

        @keyframes gradientRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Language Toggle Button */
        .language-toggle {
          position: fixed;
          top: 2rem;
          right: 2rem;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: rgba(0, 217, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 2px solid var(--primary);
          border-radius: 50px;
          color: var(--primary);
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Space Mono', monospace;
        }

        .language-toggle:hover {
          background: var(--primary);
          color: var(--darker);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 217, 255, 0.3);
        }

        .language-toggle svg {
          transition: transform 0.3s ease;
        }

        .language-toggle:hover svg {
          transform: rotate(180deg);
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10%;
          position: relative;
          z-index: 1;
          gap: 4rem;
        }

        .hero-content {
          flex: 1;
          max-width: 700px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(0, 217, 255, 0.1);
          border: 2px solid var(--primary);
          border-radius: 50px;
          font-size: 0.85rem;
          margin-top: 3rem;
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeInUp 0.8s forwards;
          font-weight: 600;
          color: var(--primary);
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.03em;
          opacity: 0;
          animation: fadeInUp 0.8s forwards;
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .hero-title {
            white-space: normal;
          }
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--primary), var(--secondary), var(--purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .hero-subtitle {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.25rem;
          color: var(--gray);
          margin-bottom: 1.5rem;
          opacity: 0;
          animation: fadeInUp 0.8s forwards;
        }

        .inline-icon {
          color: var(--primary);
        }

        .separator {
          color: var(--primary);
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--gray);
          margin-bottom: 2.5rem;
          max-width: 600px;
          opacity: 0;
          animation: fadeInUp 0.8s forwards;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeInUp 0.8s forwards;
          flex-wrap: wrap;
        }

        .cta-primary, .cta-secondary {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 700;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s;
          font-family: 'Space Mono', monospace;
        }

        .cta-primary {
          background: var(--primary);
          color: var(--darker);
          border: 2px solid var(--primary);
        }

        .cta-primary:hover {
          background: transparent;
          color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 217, 255, 0.3);
        }

        .cta-secondary {
          background: transparent;
          color: var(--light);
          border: 2px solid var(--light);
        }

        .cta-secondary:hover {
          background: var(--light);
          color: var(--darker);
          transform: translateY(-2px);
        }

        .hero-socials {
          display: flex;
          gap: 1rem;
          opacity: 0;
          animation: fadeInUp 0.8s forwards;
        }

        .social-link {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--gray);
          border-radius: 8px;
          color: var(--gray);
          transition: all 0.3s;
          text-decoration: none;
        }

        .social-link:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-3px);
          background: rgba(0, 217, 255, 0.1);
        }

        /* Hero Visual */
        .hero-visual {
          flex: 1;
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .floating-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          font-weight: 700;
          animation: float 6s ease-in-out infinite;
        }

        .card-1 {
          top: 37%;
          left: 10%;
          color: var(--primary);
          border-color: var(--primary);
          animation-delay: 0s;
        }

        .card-2 {
          top: 65%;
          right: 1%;
          color: var(--secondary);
          border-color: var(--secondary);
          animation-delay: 1s;
        }

        .card-3 {
          top: 90%;
          left: 15%;
          color: var(--accent);
          border-color: var(--accent);
          animation-delay: 2s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Sections */
        section {
          padding: 8rem 10%;
          position: relative;
          z-index: 1;
        }

        .section-header {
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .title-number {
          font-size: 2rem;
          color: var(--primary);
          font-family: 'Space Mono', monospace;
        }

        .title-line-decoration {
          height: 2px;
          background: linear-gradient(90deg, var(--primary), transparent);
          margin-top: 1rem;
        }

        /* Skills Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s;
          opacity: 0;
          animation: fadeInUp 0.8s forwards;
        }

        .skill-category:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
          background: rgba(0, 217, 255, 0.05);
        }

        .category-title {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--primary);
          font-weight: 700;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          font-size: 0.9rem;
          transition: all 0.3s;
          opacity: 0;
          animation: fadeInUp 0.6s forwards;
        }

        .skill-tag:hover {
          background: var(--primary);
          color: var(--darker);
          border-color: var(--primary);
          transform: translateY(-2px);
        }

        /* Experience Timeline */
        .experience-timeline {
          display: grid;
          gap: 2rem;
        }

        .experience-card {
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-left: 4px solid var(--primary);
          border-radius: 12px;
          padding: 2rem;
          transition: all 0.3s;
          position: relative;
          opacity: 0;
          animation: fadeInUp 0.8s forwards;
        }

        .experience-card.current {
          border-left-color: var(--secondary);
          background: rgba(255, 0, 110, 0.05);
        }

        .experience-card:hover {
          transform: translateX(10px);
          background: rgba(255, 255, 255, 0.05);
        }

        .current-badge {
          position: absolute;
          top: -0.5rem;
          right: 1rem;
          padding: 0.25rem 0.75rem;
          background: var(--secondary);
          color: white;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(255, 0, 110, 0.3);
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 1rem;
          gap: 1rem;
        }

        .exp-role {
          font-size: 1.5rem;
          color: var(--light);
          font-weight: 700;
        }

        .exp-period {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .exp-company, .exp-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
          margin-bottom: 0.5rem;
        }

        .exp-description {
          margin-top: 1rem;
          padding: 0.75rem 1rem;
          background: rgba(0, 217, 255, 0.05);
          border-left: 3px solid var(--primary);
          border-radius: 4px;
        }

        .exp-description p {
          color: var(--light);
          line-height: 1.6;
          font-size: 0.95rem;
          margin: 0;
        }

        /* Education Timeline */
        .education-timeline {
          display: grid;
          gap: 2rem;
        }

        .education-card {
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-left: 4px solid var(--purple);
          border-radius: 12px;
          padding: 2rem;
          transition: all 0.3s;
          position: relative;
          opacity: 0;
          animation: fadeInUp 0.8s forwards;
        }

        .education-card.current {
          border-left-color: var(--accent);
          background: rgba(255, 190, 11, 0.05);
        }

        .education-card:hover {
          transform: translateX(10px);
          background: rgba(255, 255, 255, 0.05);
        }

        .edu-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 1rem;
          gap: 1rem;
        }

        .edu-degree {
          font-size: 1.5rem;
          color: var(--light);
          font-weight: 700;
        }

        .edu-period {
          color: var(--purple);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .education-card.current .edu-period {
          color: var(--accent);
        }

        .edu-school, .edu-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
          margin-bottom: 0.5rem;
        }

        .edu-year {
          margin-top: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(131, 56, 236, 0.1);
          border-left: 3px solid var(--purple);
          border-radius: 4px;
          color: var(--light);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .education-card.current .edu-year {
          background: rgba(255, 190, 11, 0.1);
          border-left-color: var(--accent);
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.4s;
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: fadeInUp 0.8s forwards;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--accent-color, var(--primary));
          transform: scaleX(0);
          transition: transform 0.4s;
        }

        .project-card:hover::before {
          transform: scaleX(1);
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-color, var(--primary));
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .project-type {
          font-size: 0.85rem;
          color: var(--accent-color, var(--primary));
          font-weight: 700;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .project-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .project-description {
          color: var(--gray);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-badge {
          padding: 0.4rem 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          font-size: 0.85rem;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-color, var(--primary));
          font-weight: 600;
          cursor: pointer;
          transition: gap 0.3s;
        }

        .project-card:hover .project-link {
          gap: 1rem;
        }

        /* Certifications */
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .cert-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          transition: all 0.3s;
          opacity: 0;
          animation: fadeInUp 0.8s forwards;
        }

        .cert-card:hover {
          border-color: var(--accent);
          background: rgba(255, 190, 11, 0.05);
          transform: translateX(10px);
        }

        .cert-icon {
          color: var(--accent);
          flex-shrink: 0;
        }

        /* Contact Section */
        .contact-section {
          background: rgba(255, 255, 255, 0.02);
          border-top: 2px solid rgba(255, 255, 255, 0.1);
        }

        .contact-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-subtitle {
          font-size: 1.25rem;
          color: var(--gray);
          margin-bottom: 3rem;
        }

        .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          transition: all 0.3s;
          text-decoration: none;
          color: inherit;
        }

        .contact-method:hover {
          border-color: var(--primary);
          background: rgba(0, 217, 255, 0.05);
          transform: translateY(-5px);
        }

        .method-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.25rem;
        }

        .method-label {
          font-size: 0.85rem;
          color: var(--gray);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .method-value {
          font-weight: 600;
          color: var(--light);
        }

        /* CV Download Section */
        .cv-download-section {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 2px solid rgba(255, 255, 255, 0.1);
        }

        .cv-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--light);
          margin-bottom: 2rem;
        }

        .cv-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cv-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid var(--primary);
          border-radius: 8px;
          color: var(--primary);
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s;
          font-family: 'Space Mono', monospace;
        }

        .cv-button:hover {
          background: var(--primary);
          color: var(--darker);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 217, 255, 0.3);
        }

        .cv-button svg {
          transition: transform 0.3s;
        }

        .cv-button:hover svg {
          transform: translateY(-2px);
        }

        /* Footer */
        .footer {
          padding: 3rem 10%;
          text-align: center;
          color: var(--gray);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer p {
          margin: 0.5rem 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
            padding: 6rem 5%;
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-visual {
            display: none;
          }

          .hero-cta, .hero-socials {
            justify-content: center;
          }

          section {
            padding: 6rem 5%;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .projects-grid,
          .skills-grid {
            grid-template-columns: 1fr;
          }

          .exp-header {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
