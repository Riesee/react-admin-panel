import { Link } from "react-router-dom";
import "./product.css";
import { Chart } from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
            <Chart data={productData} dataKey="Sales" title="Sales Performance" grid />
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
                <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                <span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">sales:</span>
                    <span className="productInfoValue">5123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">active:</span>
                    <span className="productInfoValue">yes</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">in stock:</span>
                    <span className="productInfoValue">no</span>
                </div>
            </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
            <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" placeholder="Apple Airpod" />
                <label>In Stock</label>
                <select name="inStock" id="idStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <label>Active</label>
                <select name="active" id="Active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="productFormRight">
                <div className="productUpload">
                    <img className="productUploadImg" src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <label for="file">
                        <Publish />
                    </label>
                    <input type="file" id="file" style={{display:"none"}} />
                </div>
                <button className="ProductButton">Update</button>
            </div>
        </form>
      </div>
    </div>
  );
}
