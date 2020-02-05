import React,{Component} from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permission: this.props.userEditObject.permission
        }
    }
    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;

        this.props.getEditUserInfo(info);
        this.props.changeEditUserStatus();
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="card text-center">
                        <div className="card border-primary">
                        <div className="card-header">Sửa thông tin user trong hệ thống</div>
                        <div className="card-body text-primary">
                            
                            <div className="form-group">
                            <input type="text" onChange={(event) => this.isChange(event)} name="name" defaultValue={this.props.userEditObject.name} id className="form-control" placeholder="Tên User" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                            <input type="text" onChange={(event) => this.isChange(event)} name="tel" defaultValue={this.props.userEditObject.tel} id className="form-control" placeholder="Điện thoại" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                            <select className="form-control" onChange={(event) => this.isChange(event)} name="permission" defaultValue={this.props.userEditObject.permission} id>
                                <option value={1}>Admin</option>
                                <option value={2}>Modrator</option>
                                <option value={3}>Normal</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <button onClick={()=>this.saveButton()} className="btn btn-block btn-primary">Sửa</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-12"><hr></hr></div>
            </div>     
        );
    }
}
export default EditUser;