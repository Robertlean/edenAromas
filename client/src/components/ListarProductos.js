const ListarProductos = () => {
  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">Aroma</th>
          <th scope="col">Stock</th>
          <th scope="col">Modificar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Lavanda</th>
          <td>3</td>
          <td>
            <button className='btn btn-danger'><i className="fas fa-trash"></i></button>
          </td>
        </tr>
        <tr>
          <th scope="row">Nardo</th>
          <td>5</td>
          <button className='btn btn-danger'><i className="fas fa-trash"></i></button>
        </tr>
      </tbody>
    </table>
  )
}
export default ListarProductos