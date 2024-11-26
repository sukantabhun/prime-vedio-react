import './index.css'

const MovieItem = props => {
  const {itemData} = props
  const {thumbnailUrl} = itemData

  return (
    <div>
      <img
        src={thumbnailUrl}
        alt="thumbnail"
        className="item-image"
        onError={() =>
          console.error(`Failed to load image at ${itemData.thumbnailUrl}`)
        }
      />
    </div>
  )
}

export default MovieItem
