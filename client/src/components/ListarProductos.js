const ListarProductos = () => {
  return (
    <div className="container mt-4 ">
      <table className="table table-striped shadow-sm p-3 bg-white rounded">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Aroma</th>
            <th scope="col">Stock</th>
            <th scope="col">Modificar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><h4>Lavanda</h4></th>
            <td>3</td>
            <td>
              <button className='btn btn-danger mr-3'><i className="fa fa-trash"></i></button>
              <button className='btn btn-success'><i className="fas fa-pen"></i></button>
            </td>
          </tr>
          <tr>
            <th scope="row"><h4>Nardo</h4></th>
            <td>5</td>
            <td>
              <button className='btn btn-danger mr-3'><i className="fas fa-trash"></i></button>
              <button className='btn btn-success'><i className="fas fa-pen"></i></button>
            </td>            
          </tr>
          <tr>
            <th scope="row"><h4>Naranja</h4></th>
            <td>7</td>
            <td>
              <button className='btn btn-danger mr-3'><i className="fas fa-trash"></i></button>
              <button className='btn btn-success'><i className="fas fa-pen"></i></button>
            </td> 
          </tr>
        </tbody>
      </table>
    </div>    
  )
}
export default ListarProductos