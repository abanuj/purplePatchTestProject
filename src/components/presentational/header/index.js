import { connect } from 'react-redux';
import { default as Header } from './header';
import { getUserList} from '../../../store';

const mapStateToProps = (state) => ({
    userDataList: state.user.userDataList,
    selectedList: state.user.selectedList,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
