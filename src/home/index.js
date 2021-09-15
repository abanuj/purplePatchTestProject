import { connect } from 'react-redux';
import { default as Home } from './home';
import { getUserList,makeSelection} from '../store';

const mapStateToProps = (state) => ({
    userDataList: state.user.userDataList,
    selectedList: state.user.selectedList,
});

const mapDispatchToProps = (dispatch) => ({
    getUserList: () => dispatch(getUserList()),
    makeSelection: (userId) => dispatch(makeSelection(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
