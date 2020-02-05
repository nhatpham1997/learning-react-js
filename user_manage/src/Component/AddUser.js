import React, {Component} from "react";

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: ""
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({
            [name]:value
        });
    }

    kiemTra = () => {
        if(this.props.hienThiForm === true){
            return(
                <div className="col">
                    <div className="card text-center">
                    <form>
                        <div className="card border-primary">
                        <div className="card-header">Thêm mới</div>
                        <div className="card-body text-primary">
                            
                            <div className="form-group">
                            <input type="text" onChange={(event) => this.isChange(event)} name="name" id className="form-control" placeholder="Tên User" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                            <input type="text" onChange={(event) => this.isChange(event)} name="tel" id className="form-control" placeholder="Điện thoại" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                            <select className="form-control" onChange={(event) => this.isChange(event)} name="permission" id>
                                <option value={1}>Admin</option>
                                <option value={2}>Modrator</option>
                                <option value={3}>Normal</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <input type="reset" className="btn btn-block btn-primary" onClick={(name,tel,permission)=>this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Thêm mới"></input>
                            </div>
                            
                        </div>
                        </div>
                        </form>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
                <div>
                    {this.kiemTra()}
                </div>        
        );
    }
}
export default AddUser;