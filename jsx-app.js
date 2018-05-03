console.log("App is running");

// JSX - Javascript XML
/*

let template = (
  <div>
    <h1>New React App</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options.length > 0) ? "Here are your options." : "No options available."}</p>
  </div>
);

let template2 = (
  <div>
    <h1>John Doe</h1>
    <p>Age:28</p>
    <p>Location: Wakanda</p>
  </div>
); */

/* let count = 0;
let addOne = () => {
  count++;
  renderReactApp();
}; */

let app = {
  title: "New React App",
  subtitle: "This is the subtitle of the app",
  options: []
};

let addOption = (e) => {
  e.preventDefault();
  let option = e.target.elements.option.value;
  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderReactApp();
};

let removeAll = () => {
  app.options.length = 0;
  renderReactApp();
};

let appRoot = document.getElementById('app');
const renderReactApp = () => {
  let template = (
    <div>
      <h1 className='text-center'>{app.title}</h1>
      <p className='text-center'>{app.subtitle}</p>
      <p className='text-center'>{app.options.length > 0 ? (app.options.length == 1 ? `${app.options.length} item is there` : `${app.options.length} items are there`)  : 'Nothing is there'} </p>
      <div className='row justify-content-center mb-3'>
        <form className='form-inline' onSubmit={addOption}>
          <input type='text' name='option' className='form-control mr-3' />
          <button className='btn btn-primary'>Add Option</button>
        </form>
      </div>
      {app.options.length > 0 ? 
        <ul className='list-group mb-3'>
          {app.options.map((option) => {
            return <li className='list-group-item' key={option}>{option}</li>;
          })}
        </ul> 
        : 
        <p className='text-center'>Everything's empty here :(</p>}
      {app.options.length > 0 && 
        <p className='text-center'>
          <button className='btn btn-danger' onClick={removeAll}>Remove All Items</button>
        </p>
      }
    </div>
  );
  ReactDOM.render(template, appRoot);
};

/* const renderReactApp = () => {
  let template = (
    <div>
      <h2>Count: {count}</h2>
      <button className='btn btn-sm btn-primary' id='inc' onClick={addOne}>+1</button>
    </div>
  );
  ReactDOM.render(template, appRoot);
}; */

renderReactApp();

/* const multiplier = {
  numbers: [1, 2, 3, 4],
  multiplyBy(num) {
    let newArray = [];
    this.numbers.forEach((number) => newArray.push(num * number));
    return newArray;
  }
};

console.log(multiplier.multiplyBy(6)); */