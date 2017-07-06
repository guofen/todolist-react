import React from 'react';
import {Button,Input} from 'antd';

class AppContent extends React.Component{
    constructor(props){
        super(props);
        this.deleteTest = this.deleteTest.bind(this);
        this.state={
            flag:true,
        }
    }

    deleteTest(index){
        this.props.items.splice(index,1);
        this.setState({
            items:[...this.props.items],
        })
    }

    updateTest(){
        this.setState({
            flag:false
        })
        console.log("update:",this.props.items);
    }

    okUpdate(val){
        this.setState({
            flag:true,
        });
        // this.props.items[val] = this.testName.refs.input.value;
    }

    cancelUpdate(){
        this.setState({
            flag:true,
        });
    }

    render(){
        const styles = this.getStyles();
        return (
            <div style={styles.appContent}>
                <ul>

                    {
                        this.props.items.map((data, i)=>{return <li key={i} style={styles.item} >
                        {
                            this.state.flag ? 
                            <div>
                                {data}
                                <Button style={styles.updateBtn} onClick={()=>this.updateTest()}>修改</Button>
                                <Button style={styles.deleteBtn} onClick={()=>this.deleteTest(i)}>删除</Button>
                            </div>:
                            <div>
                                <Input  ref={(input)=>this.testName=input} defaultValue={data} style={styles.input} key={i}/>
                                <Button style={styles.updateBtn} onClick={()=>this.okUpdate(i)}>确认</Button>
                                <Button style={styles.deleteBtn} onClick={()=>this.cancelUpdate()}>取消</Button>
                            </div>
                        }
                        </li>})
                    }
                </ul>
            </div>
        )
    }

    getStyles(){
        return {
            appContent:{
                marginRight:'auto',
                marginLeft:'auto',
                width:500,
            },
            item:{
                height:36,
                fontSize:20,
                display:'flex',
                alignItems:'center',
            },
            updateBtn:{
                marginLeft:10,
                marginRight:10
            },
            input:{
                width:300,
            }
        }
    }
}

export default AppContent;
