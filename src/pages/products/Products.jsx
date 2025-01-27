import "./products.css"
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DeleteOutline } from "@material-ui/icons";


export default function Products() {

    const [data,setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }


    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Product",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productListItem">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 120,
        },
        {
          field: "price",
          headerName: "Price",
          width: 160,
        },
        {
          field: "action",
          headerName: "Action",
          width: 160,
          renderCell: (params) => {
            return (
              <>
                <Link to={`/product/${params.row.id}`}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)}  />
              </>
            );
          },
        },
      ];
    
  return (
    <div className="products">
        <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  )
}
