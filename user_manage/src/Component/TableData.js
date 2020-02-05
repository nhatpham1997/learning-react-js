import React,{Component} from 'react';

class TableData extends Component {
    permissionShow = () =>{
        if(this.props.permission === 1){
            return "Admin"
        }else if(this.props.permission === 2){
            return "Modrator"
        }else{
            return "Normal"
        }
    }
    editClickFun = () => {
        this.props.editClick();
        this.props.changeEditUserStatus();
    }
    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser);
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.data}</td>
                <td>0397060853</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn btn-warning sua" onClick={() => this.editClickFun()}><i className="fa fa-edit">Sửa</i></div>
                    <div className="btn btn-danger xoa" onClick={(idUser) => this.deleteButtonClick(this.props.id)}><i className="fa fa-trash">Xóa</i></div>
                </td>
            </tr>
        );
    }
}
export default TableData;