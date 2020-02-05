import React, {Component} from 'react';
import EditUser from './EditUser';

class SearchUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj:{}
        }
    }
    hienThiNut = () => {
        if(this.props.hienThiForm === true){
            return <div className="btn btn-block btn-outline-secondary" onClick={this.props.ketNoi}>Đóng lại</div>
        }else{
            return <div className="btn btn-block btn-outline-info" onClick={this.props.ketNoi}>Thêm mới</div>
        }
    }
    getEditUserInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getEditUserInfoToApp(info);
    }
    isShowEdit = () => {
        if(this.props.showEdit === true){
            return <EditUser getEditUserInfo={(info) => this.getEditUserInfo(info)} userEditObject={this.props.userEditObject} changeEditUserStatus={() => this.props.changeEditUserStatus()}></EditUser>
        }
    }
    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.getTextSearch(this.state.tempValue);
    }
    
    render() {
        return (
                <div className="col-12">
                    {this.isShowEdit()}
                    <div className="form-group">
                        <div className="btn-group">
                        <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập từ khóa" 
                        onChange={(event) => this.isChange(event)}/>
                        <div className="btn btn-info" onClick={(dl)=>this.props.getTextSearch(this.state.tempValue)}>Tìm</div>
                        </div>
                    </div>
                    {this.hienThiNut()}
                </div>
        );
    }
}
export default SearchUser;