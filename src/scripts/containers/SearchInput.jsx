import { connect } from 'react-redux'
import SearchInput from '../components/SearchInput'
import { filterProducts } from '../actions'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = {
    filterProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
