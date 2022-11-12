const SoftSkills = ({ skillName, time }: { skillName: string; time: string }) => (
  <div className="skills__container">
    <div className="content flex col center">
      <p className="skill_name">{skillName}</p>
      <p className="skills_time">{time}</p>
    </div>
    <style jsx>{`
      * {
        //outline: 1px solid palegreen;
      }
      .skills__container {
        max-width: 150px;
        width: 100%;
        //max-height: 52px;
        position: relative;
        background-clip: padding-box; /* !importanté */
        border: solid var(--skills-border) transparent; /* !importanté */
        border-radius: 27px;
        //border-image-slice: 1;
        //border-width: 5px;
        //border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
      }

      .skills__container:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: calc(-1 * var(--skills-border)); /* !importanté */
        border-radius: inherit; /* !importanté */
        background: linear-gradient(
          251.7deg,
          rgba(116, 230, 255, 0.2175) -14.3%,
          rgba(84, 164, 182, 0.21) 150.35%
        );
      }

      .content {
        padding: 4px 10px;
        border-radius: 27px;
        background: white;
      }

      .skill_name {
        font-weight: 500;
        font-size: 18px;
        color: black;
      }
      .skills_time {
        color: #858585;
      }
    `}</style>
  </div>
);

export default SoftSkills;
