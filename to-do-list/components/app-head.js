import React from 'react';

import {Input,Button} from 'antd';

class AppHead extends React.Component{
    constructor(props){
        super(props);
        this.state={
            testName:'start'
        }
        this.addTest = this.addTest.bind(this);

    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                testName:'end'
            })
        },1000);
    };

    addTest(){
        const a = this.testName.refs.input.value;
        this.props.change(a);
    }
    render(){
        const styles = this.getStyles();
        return (
            <div style={styles.app}>
                <p style={styles.title}>React todos App</p>
                <div>
                    <Input placeholder="请输入任务名称" style={styles.inputAddtestName} ref={(input)=>this.testName=input}/>
                    <Button style={styles.addBtn} onClick={()=>this.addTest()}>添加</Button>
                </div>
            </div>
        )
    }

    getStyles(){
        return {
            app:{
                width:500,
                height:136,
                marginRight:'auto',
                marginLeft:'auto',
                paddingTop:30,
            },
            title:{
                fontSize:32,
                color:'#888',
                textAlign:'left',
            },
            inputAddtestName:{
                width:400,
                height:36,
                paddingLeft:20,
                fontSize:16,
                borderRadius:8,
                margin:10,
            },
            addBtn:{
                height:36,
                width:80,
                fontSize:16,
            }
        }
    }
}

export default AppHead;
