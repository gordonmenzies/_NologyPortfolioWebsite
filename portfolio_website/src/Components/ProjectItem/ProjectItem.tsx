import "./ProjectItem.scss";

type MyProjectProps = {
  technology: string;
  title: string;
  description: string;
  descriptionDesktop: string;
  codeLink: string;
  previewLink: string;
  imagePath: string;
};

const ProjectItem = ({ technology, title, description, descriptionDesktop, codeLink, previewLink, imagePath }: MyProjectProps) => {
  return (
    <div className="myProject__item">
      <img className="myProject__image" src={imagePath} />
      <h3 className="myProject__technology">{technology}</h3>
      <h2 className="myProject__projectTitle">{title}</h2>
      <p className="myProject__description">{description}</p>

      <p className="myProject__description--desktop">{descriptionDesktop}</p>

      <div className="myProject__view">
        <a href={codeLink}>
          <h4>Code</h4>
        </a>
        <a href={previewLink}>
          <img src="images/logo.png" className="myProject__codeLink" />
        </a>
        <h4>Preview</h4>
        <img src="images/Eye.png" className="myProject__webLink" />
      </div>
    </div>
  );
};

export default ProjectItem;
