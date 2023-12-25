const root = ReactDOM.createRoot(document.querySelector('#root'));

const CounterComponent = () => {
    return (
        <div className="counter">
            <button>+</button>
            <h2>{0}</h2>
            <button>-</button>
            <button>0</button>
            <button>X</button>
        </div>
    );
}

function App() {
    return (
        <div className="head-counter">
            <h1 className="Sum">Sum = 0</h1>
            <button> Add Counter</button>
            <CounterComponent />
        </div>
    );
}

root.render(<App />);
