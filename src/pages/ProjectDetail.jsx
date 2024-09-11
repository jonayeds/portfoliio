import { useParams } from "react-router-dom"

const ProjectDetail = () => {
    const {name} = useParams()
  return (
    <div>{name}</div>
  )
}

export default ProjectDetail