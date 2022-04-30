import logo from './logo.svg';
import './App.css';
import * as requester from './sendRequests'

function App() {
  return (
    <div className="App">
      <body>
      <div className="ZADUDOSER" >
        <button className={"button"} id={"axios-button"} onClick={requester.sendAxios}>
            Axios
        </button>
        <button className={"button"} id={"superagent-button"} onClick={requester.sendSuperagent}>
            Superagent
        </button>
        <button className={"button"} id={"fetch-button"} onClick={requester.sendFetch}>
            Fetch
        </button>
      </div>
      <div className="RESUlTS">
          <div>
              Axios Result:
              <text id={"axios-res"}>

              </text>
          </div>
          <div>
              Superagent Result:
              <text id={"superagent-res"}>

              </text>
          </div>
          <div>
              Request Result:
              <text id={"request-res"}>

              </text>
          </div>
          <div>
              Fetch Result:
              <text id={"fetch-res"}>

              </text>
          </div>
          <div>
              Supertest Result:
              <text id={"supertest-res"}>

              </text>
          </div>

      </div>
      </body>
    </div>
  );
}

export default App;
