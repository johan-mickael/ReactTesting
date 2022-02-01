import ReadMore from "./ReadMore";

const card = ({ data, deleteItem }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="card bg-white mb-3">
          <img src={item.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="card-title">
              <h5>{item.title}</h5>
              <span className="text-primary float-right">${item.cost}</span>
            </div>
            <ReadMore description={item.desc} />
            <div class="d-grid gap-2">
              <button
                className="btn btn-block btn-outline-danger btn-sm"
                onClick={() => deleteItem(item.id)}
              >
                Not interested
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default card;
