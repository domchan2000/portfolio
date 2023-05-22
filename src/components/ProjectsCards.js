import { Col } from "react-bootstrap"

export const ProjectsCard = ({ title, description, imgUrl, repo, demo }) => {
  const handleDemoClick = (e) => {
    if (!demo) {
      e.preventDefault();
      alert("Demo not available");
    }
  };

  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <span>
            <a href={repo} className="link" target="_blank" rel="noopener noreferrer">
              Repo
            </a>
          </span>
          
            <span>
              <a href={demo} className="link" target="_blank" rel="noopener noreferrer" onClick={handleDemoClick}>
                Demo
              </a>
            </span>
     
        </div>
      </div>
    </Col>
  );
};

  