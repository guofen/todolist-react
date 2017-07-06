import React from 'react';
import ReactDOM from 'react-dom';
import { Input,Button  } from 'antd';

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[],
        }
        this.addNums = this.addNums.bind(this);
        this.deleteLastNumber = this.deleteLastNumber.bind(this);
        this.deleteFirstNumber = this.deleteFirstNumber.bind(this);
        this.setData = this.setData.bind(this);
    }

    addNums(e){
        this.setState({
            items: [
                ...this.state.items,
                this.nums.refs.input.value
            ]
        });
    }

    setData(){
        this.setState({
            items:[
                ...this.state.items,
            ]
        })
    }

    deleteLastNumber(){
        this.state.items.pop();
        this.setData();
    }

    deleteFirstNumber(){
        this.state.items.shift();
        this.setData();
    }

    render(){
        const styles = this.getStyles();
        return (
            <div style={styles.page}>
                <Input name="numsText" size="large"style={{width:'240',marginRight:'10'}}  ref={(input)=>this.nums = input}  placeholder="enter nums"/>
                <Button onClick={()=>this.addNums()}>添加</Button>
                <div style={styles.operate}>
                    <Button style={styles.dis}>左侧入</Button>
                    <Button style={styles.dis} onClick={()=>this.deleteFirstNumber()}>左侧出</Button>
                    <Button style={styles.dis}>右侧入</Button>
                    <Button style={styles.dis} onClick={()=>this.deleteLastNumber()}>右侧出</Button>
                </div>
                <ul>
                    {
                        this.state.items.map((data)=> {return <li style={styles.listItem}>{data}</li>})
                    }
                </ul>
            </div>
        )
    }
    getStyles(options){
        return {
            page:{
                width:320,
                minHeight:400,
                marginLeft:'auto',
                marginRight:'auto',
                marginTop:50,
                borderColor:'#000',
                background:'#66CCFC',
                paddingTop:20,
                paddingLeft:5,
                borderRadius:5
            },
            operate:{
                marginTop:20,
            },
            dis:{
                marginRight:10,
                borderColor:'#49a9ee',
            },
            listItem:{
                'border':"1px solid #fff",
                marginTop:10,
                width:310,
                height:35,
                background:'#fff',
                borderRadius:5,
                display:'flex',
                alignItems: 'center',
                paddingLeft:20,
                fontSize:18,
                color:'#4881D1',
                fontWeight:'bold'
            }
        }
    }
}



ReactDOM.render(<Todolist />,document.getElementById('root'));
