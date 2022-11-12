import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import './App.css'
function App() {
  
  return (
    <div className="App">
      <div className="box-1 container-xxl">
        <Nav>
          <Nav.Item>
            <img
              style={{ paddingTop: "40px", paddingLeft: "40px" }}
              src="//capp.nicepage.com/91c4197feacce9d0a6fdaa0fcb806f350047013e/images/default-logo.png"
            />
          </Nav.Item>

          <Nav.Link>
            <Button
              variant="link"
              style={{ marginLeft: "420px", marginTop: "10px" }}
            >
              Contact
            </Button>
            <Button
              style={{
                background: "#64e6cf",
                color: "black",
                border: "none",
                fontWeight: "650",
                width: "300px",
                marginLeft: "260px",
                marginTop: "23px",
                borderRadius: "0.4em",
              }}
              variant="secondary"
              size="lg"
              onMouseOver={(event) => {
                let btn = event.currentTarget;
                btn.style.color="white"
                btn.style.background="#013220"

              }}
              onMouseLeave={(event) => {
                let btn = event.currentTarget;
                btn.style.color="black"
                btn.style.background="#64e6cf"

              }}
            >
              
              Token Purchase
            </Button>

          </Nav.Link>
        </Nav>
        <Button variant="secondary" style={{
          marginLeft : '34px',
          marginTop : "70px"
        }} size="lg">
        <span><img width="30px" src="data:image/png;base64,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"/> <span style={{
          "fontWeight" : "500"
        }}>+20% </span>for all new token buyers</span>
        
        
      </Button>
      <br />
      <span style={{
        paddingLeft : "35px",
        fontSize : "4.5rem",
        fontWeight : "700",
        color : "white"
      }}>Digital Stock With<br />
      <span style={{
        paddingLeft : "35px"

      }}> Gold Collateral</span></span>
      <br />
      <span style={{
        paddingLeft : "40px",
        color : "#929"
      }}>Up to 100% buyback from year 3*! Buy ICO tokens today and profit from the sale and growth of our company's products!</span>
      </div>
    </div>
  );
}

export default App;
