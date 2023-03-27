import { useState, useEffect } from "react"
import Job from "../job/Job"
import ajax from "../../helpers/http-ajax"
import './Jobs.css'

export default function Jobs() {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    ajax('./data.json').then(res => setJobs(res))
  }, [])

  return (
    <div className="jobs-container">
      {
        jobs.map(job => <Job job={job} key={job.id}/>)
      }
    </div>
  )
}