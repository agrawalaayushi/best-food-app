import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { requestFoodAppData } from '../../actions/action';
import Favourite from './favourite';
import Category from './category';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }
  //-----------------------------------
  // Methods
  //-----------------------------------

  init() {
    this.getData();
  }

  getData() {
    this.props.getFoodAppData();
  }

  //-----------------------------------
  // View
  //-----------------------------------


  //-----------------------------------
  // LifeCycle
  //-----------------------------------

  componentDidMount() {
    this.init();
  }
  
  render() {
    const { foodRecepies, foodCategories } = this.props;

    return (
        <div className="food-app-wrapper">
            {foodRecepies&& <Favourite recipes={foodRecepies}/>}
            {foodCategories && <Category categories={foodCategories}/>}
        </div>
    );
  }
}


const mapStateToProps = state => ({
    ...state,
    foodCategories: state.reducer.get('foodCategories'),
    foodRecepies: state.reducer.get('foodRecepies')
   })
  
  const mapDispatchToProps = dispatch => ({
    getFoodAppData: () => dispatch(requestFoodAppData()),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
  
  


