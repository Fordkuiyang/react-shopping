import React, { Component } from 'react'
import { Modal, Button, Nav, Table, Badge } from 'react-bootstrap';
import ClickCount from '../containers/ClickCount';
import CheckOrder from '../containers/CheckOrder';
import CheckAllOrder from '../containers/CheckAllOrder';
import TotalAmount from '../containers/TotalAmount';

export default class EnshrineGoods extends Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    onSubbmit() {
        this.props.onSubbmit(this.props.productOrders.filter(productOrder => productOrder.checked));
        debugger;
        this.handleClose();
    }

    render() {
        const { productOrders, enshrinecount } = this.props;
        return (
            <>
                <Nav.Link href="#" onClick={this.handleShow}>收藏柜<Badge variant="light">{enshrinecount}</Badge></Nav.Link>
                <Modal show={this.state.show} onHide={this.handleClose} size="lg">
                    <Modal.Body>
                    <Modal.Title>购物订单</Modal.Title>
                        <Table responsive >
                            <thead>
                                <tr>
                                    <th><CheckAllOrder checked={false} />全选</th>
                                    <th>商品信息</th>
                                    <th>订单号</th>
                                    <th>单价</th>
                                    <th>数量</th>
                                    <th>金额</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productOrders && productOrders.length ?
                                    productOrders.map(porduct => (<tr key={porduct.orderId}>
                                        <td><CheckOrder product={porduct} /></td>
                                        <td>{porduct.name}</td>
                                        <td>{porduct.orderId}</td>
                                        <td>{porduct.price}</td>
                                        <td><ClickCount product={porduct} /></td>
                                        <td>￥{porduct.totalAmount}</td>
                                    </tr>)) : <tr><td>没有订单!!!</td></tr>
                                }
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <TotalAmount />
                        <Button variant="secondary" onClick={this.handleClose}>
                            关闭 </Button>
                        <Button variant="primary" onClick={this.onSubbmit.bind(this)}>
                            结算</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
