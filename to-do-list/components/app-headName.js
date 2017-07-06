import React from "react";

class AppHeadName extends React.Component{
    constructor(){
        super();
    }

    render(){
        const styles = this.getStyles();
        return (
            <div style={styles.appheadname}>
                <div style={styles.test}>Test</div>
                <div style={styles.action}>Action</div>
            </div>
        )
    }

    getStyles(){
        return {
            appheadname:{
                width:500,
                height:50,
                marginRight:'auto',
                marginLeft:'auto',
                display:'flex',
                flexDirection:'column',
                flexFlow:'row',
            },
            test:{
                fontSize:26,
                width:280,
            },
            action:{
                fontSize:26,
                width:200,
            },
        }
    }
}
export default AppHeadName;
