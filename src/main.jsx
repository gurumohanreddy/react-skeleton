var React = require('react');
var ReactDOM = require('react-dom');
 var  MyComponent = React.createClass({
       filterList:function(event){
         console.log(event.target.value);
        var updatedList = this.state.initialItems;
        updatedList =updatedList.filter(function(item){
            return item.toLowerCase().search(
              event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items:updatedList});
       },
       getInitialState: function(){
         return {
             initialItems: [
               "Bv Satyaram",
               "Ranga",
               "Souri",
               "Rakesh",
               "Venkat",
               "Deepan",
               "Paras",
               "Raj",
               "Tingu"
             ],
             items: []
         }
      },
      componentWillMount:function(){
          this.setState({items:this.state.initialItems});
      },
      render:function(){
        return(
          <div class="filter-list">
            <input type="text" placeholder="Search" onChange={this.filterList}/>
            <List items={this.state.items}/>
          </div>
        );
      }
 });

 var List = React.createClass({
   render:function(){
     return(
       <ul>
       {
         this.props.items.map(function(item){
           return <li key={item}>{item}</li>
         })
       }
       </ul>
     );
   }
 })

ReactDOM.render(
        <MyComponent/>,
        document.getElementById('main')
);
