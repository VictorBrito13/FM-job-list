import { useState, useEffect } from "react"
import Job from "../job/Job"
import ajax from "../../helpers/http-ajax"
import './Jobs.css'

export default function Jobs(props) {
  const { filters, setFilters } = props.state
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    ajax('./data.json').then(res => setJobs(res))
    const jobsFiltered = new Set([])

    jobs.forEach((job) => {
      const jobValues = Object.values(job)
      Array.from(filters).forEach(filter => {
        if(jobValues.includes(filter)) {
          jobsFiltered.add(job)
        } else {
          jobsFiltered.delete(job)
        }
      })
    })
  }, [filters])

  return (
    <div className="jobs-container">
      {
        jobs.map(job => <Job job={job} key={job.id} state={{ filters, setFilters }}/>)
      }
    </div>
  )
}