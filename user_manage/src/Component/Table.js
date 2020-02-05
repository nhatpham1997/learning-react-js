import React, {Component} from 'react';
import TableData from './TableData';

class Table extends Component {
    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser)
    }
    mappingDataUser = () => this.props.dataUserProps.map((value,key) => (
            <TableData deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)} changeEditUserStatus={() => this.props.changeEditUserStatus()} editClick={(user) => this.props.edit(value)} data={value.name} stt={key} key={key} permission={value.permission} id={value.id}/>
        ))
    
    render() {
        return (
                    <div className="col">
                        <table className="table table-striped table-inverse">
                        <thead className="thead-inverse">
                            <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.mappingDataUser()}
                        </tbody>
                        </table>
                    </div>
        );
    }
}
export default Table;