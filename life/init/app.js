class Item extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name:'saj'
    }
    console.log('init state')
  }

  // static get defaultProps(){
  //   console.log('default props')
  //   return {
  //     group:123
  //   }
  // }

  render(){
    return <div>{this.props.group + this.state.name}</div>
  }
}

Item.defaultProps = {
  group:123
}


ReactDOM.render(
  <div>
    <Item/>
    <Item/>
  </div>,
  document.getElementById('test')
)