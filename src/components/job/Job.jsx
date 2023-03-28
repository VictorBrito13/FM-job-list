/*
* NOTE:
  newJob && featured: boolean
*/

import "./Job.css";

export default function Job(props) {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools
  } = props.job;
  const newJob = props.job.new;
  const { setFilters, filters } = props.state

  return (
    <div className={"job-container " + (featured ? "featured": "")}>
      <figure className="logo-container">
        <img src={logo} />
      </figure>

      <div className="job-info-container">
        <div>
          <span className="job-company">{company}</span> &nbsp;
          {newJob ? <span className="job-new">NEW!</span> : null}
          {featured ? <span className="job-featured">FEATURED</span> : null}
        </div>
        <h2 className="job-position">{position}</h2>
        <div className="job-info__container">
          <span className="job-info">{postedAt}</span>
          <span className="job-info-decoration"></span>
          <span className="job-info">{contract}</span>
          <span className="job-info-decoration"></span>
          <span className="job-info">{location}</span>
        </div>
      </div>

      <div className="job-tags">
        <span
        className="job-tag"
        title="role"
        onClick={() => {
          setFilters(new Set([...filters, role]))
        }}>
          {role}
        </span>

        <span
        className="job-tag"
        title="level"
        onClick={() => {
          setFilters(new Set([...filters.add(level)]))
        }}>
          {level}
        </span>

        {/* Languages */}
        {
          languages.map((language, index) => (
            <span
            className="job-tag"
            title="language" key={index}
            onClick={() => {
              setFilters(new Set([...filters.add(language)]))
            }}>
              {language}
            </span>
          ))
        }

        {/* tools */}
        {
          tools.map((tool, index) => (
            <span
            className="job-tag"
            title="tools" key={index}
            onClick={() => {
              setFilters(new Set([...filters.add(tool)]))
            }}>
              {tool}
            </span>
          ))
        }
      </div>
    </div>
  );
}
