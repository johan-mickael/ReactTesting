import { useState } from "react";
import "./App.css";
import Card from "./Card";
import { _data } from "./data";

function App() {
  const [data, setData] = useState(_data);
  function deleteItem(id) {
	setData(data.filter(item => item.id !== id))
}
  return (
    <div className="container bg-light min-vh-100 ">
      <div className="text-center">
        <h1 className="mb-4"><i>Our tours</i></h1>
		<hr />
        <h6 className="mb-4 text-secondary text-italic"><i>Bonjour tout le monde !</i></h6>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md">
          <Card data={data} deleteItem={deleteItem} />
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}
export default App;
