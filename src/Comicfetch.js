import React from 'react';

export class Comicfetch extends React.Component{
    constructor(){
        super();
        this.state=
        {
            dane:[]
        }
    }
    
    componentDidMount(){
        fetch("https://xkcd.now.sh/?comic=303")
           .then(res=>res.json())
           .then(json=>this.setState({dane:json.results}))
           .then(console.log(this.state.dane))
           
           
           
      }
    render(){
return(
    <div>
    <p>{this.props.title}</p>
<p>Miesiąc:{this.props.miesiac}</p>
<img alt="" src={this.props.source} />


    </div>
)
}
}