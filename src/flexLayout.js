import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import '../style/main.css';
const { Header, Footer, Sider, Content } = Layout;

class NormalLoginForm extends React.Component {
  render() {
    return (
        <div>
            <div className="tree flexBox">
                <div className="lchild flexBox">
                    <div className="lchild-lchild flexBox">
                        <div className="child flexBox">
                        </div>
                        <div className="child flexBox">
                        </div>
                    </div>
                    <div className="lchild-rchild flexBox">
                        <div className="child flexBox">
                        </div>
                        <div className="child flexBox">
                        </div>
                    </div>
                </div>
                <div className="rchild flexBox">
                    <div className="rchild-lchild flexBox">
                        <div className="child flexBox">
                        </div>
                        <div className="child flexBox">
                        </div>
                    </div>
                    <div className="rchild-rchild flexBox">
                        <div className="child flexBox">
                        </div>
                        <div className="child flexBox">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

ReactDOM.render(<NormalLoginForm />, document.getElementById('root'));
