// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="li">
      <img src={imgUrl} className="img" alt={name} />
      <p className="p1">{name}</p>
    </li>
  )
}
export default DestinationItem
