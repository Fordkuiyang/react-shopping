import { connect } from 'react-redux';
import EnshrineGoods from '../components/EnshrineGoods';
import { onSubbmit } from '../actions';
const getBadgeCount = (productOrders) => {
    return productOrders.length;
}
const mapStateToProps = (state, ownProps) => {
    const { products } = state;
    return {
        productOrders: products.productOrders,
        count: getBadgeCount(products.productOrders),
    }
}

const mapDispatchToProps = {
    onSubbmit,
}

export default connect(mapStateToProps, mapDispatchToProps)(EnshrineGoods)
