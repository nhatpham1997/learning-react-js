import React,{Component} from 'react';
import './../App.css';
import Header from './Header';
import SearchUser from './SearchUser';
import Table from './Table';
import AddUser from './AddUser';

import DataUser from './Data.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: DataUser,
      searchText: '',
      showEditStatus: false,
      userEditObject: {}
    }
  }
  
  componentWillMount() {
    if(localStorage.getItem('userData') === null){
      localStorage.getItem('userData',JSON.stringify(DataUser));
    }else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
    }
  }

  deleteButtonClick = (idUser) => {
    var tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data:tempData
    });
    localStorage.setItem('userData',JSON.stringify(tempData));
  }

  getEditUserInfoToApp = (info) => {
    this.state.data.forEach((value,key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }

  doiTrangThai = () =>{
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }

  changeEditUserStatus = () => {
    this.setState({
      showEditStatus: !this.state.showEditStatus
    });
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText:dl
    });
  }

  getNewUserData = (name,tel,permission) => {
    var item = {};
    item.id = "";
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data:items
    });
    localStorage.setItem('userData',JSON.stringify(items));
  }

  editUser = (user) => {
    this.setState({
      userEditObject:user
    });

  }

  render(){
    // localStorage.setItem('userData',JSON.stringify(DataUser));
    var ketqua = [];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    })
    return (
      <div>
        <Header></Header>
        <div className="container">
          <div className="row">
            <SearchUser getEditUserInfoToApp={(info) => this.getEditUserInfoToApp(info)} userEditObject={this.state.userEditObject} changeEditUserStatus={() => this.changeEditUserStatus()} showEdit={this.state.showEditStatus} ketNoi={()=>this.doiTrangThai()} hienThiForm={this.state.hienThiForm} getTextSearch={(dl)=>this.getTextSearch(dl)}></SearchUser>
            <div className="col-12"><hr /></div>
            <Table deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)} changeEditUserStatus={() => this.changeEditUserStatus()} edit={(user) => this.editUser(user)} dataUserProps={ketqua}></Table>
            <AddUser add={(name,tel,permission)=>this.getNewUserData(name,tel,permission)} hienThiForm={this.state.hienThiForm}></AddUser>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
