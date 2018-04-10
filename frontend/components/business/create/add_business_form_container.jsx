import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AddBusinessForm from './add_business_form';
import { addBusiness } from '../../../actions/business_actions'

const mapStateToProps = state => ({
  ownerId: Object.keys(state.session)[0]
});

const mapDispatchToProps = dispatch => ({
  addBusiness: business => dispatch(addBusiness(business))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddBusinessForm));