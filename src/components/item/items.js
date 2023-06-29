const Items = (props) => {
  const { items, del, inc, dec } = props
  let length = items.length
  const ListItem = length ? (
    items.map((item) => {
      return (
        <div key={item.id} className="item">
          <p>{item.product}</p>
          <p>{item.price}</p>
          <p className="counter">
            <button onClick={() => dec(item.id)}>-</button>
            {item.quantity}
            <button onClick={() => inc(item.id)}>+</button>
          </p>
          <p className="delete" onClick={() => del(item.id)}>
            &times;
          </p>
        </div>
      )
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  )
  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Edit</p>
      </div>
      {ListItem}
    </div>
  )
}

export default Items
