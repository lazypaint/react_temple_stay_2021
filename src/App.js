import React from "react";
import axios from "axios";
import Temple from "./Temple";

class App extends React.Component{
  state = {
    isLoading : true,
    temples: []
    
  };

  getTemples = async() => {
    const temples = await axios.get("https://openapi.gg.go.kr/Templestay?KEY=b4837aa01858433fbc45d24dcae53aff&Index=1&Type=json&pSize=5&SIGUN_CD=41820")
    const temple = temples.data.Templestay[1].row;
    
    this.setState({temple , isLoading : false});
  }

  componentDidMount(){
    this.getTemples();
  }

  render(){
    const {isLoading, temple} = this.state;
    return <div>{isLoading ? "Loading..." : temple.map(temple => {
      return <Temple 
      // key={temple.P_IDX} 
      name={temple.INVSTGTN_NM} 
      desc={temple.PROG_TYPE} 
      />
    })}</div>;
}

}

export default App;