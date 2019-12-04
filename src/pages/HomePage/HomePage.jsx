import './HomePage.scss';
import React, { Fragment, Component } from 'react'
import HomeCarousel from './HomeCarousel/HomeCarousel';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeCourse from './HomeCourse/HomeCourse';
import HomeHighlight from './HomeHighlight/HomeHighlight';
import HomePopular from './HomePopular/HomePopular';
import HomeUniv from './HomeUniv/HomeUniv';
import HomeTeacher from './HomeTeacher/HomeTeacher';
import { connect } from 'react-redux'
import { setLoading } from '../../redux/actions/QuanLyKhoaHocAction';
// import HomeCourseDiscovery from './HomeCourseDiscovery/HomeCourseDiscovery';

export class HomePage extends Component {
    componentWillUnmount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <Fragment>
                <HomeCarousel />
                <HomeAbout />
                <HomeCourse />
                <HomeHighlight />
                <HomePopular />
                <HomeUniv />
                <HomeTeacher />
                {/* <HomeCourseDiscovery /> */}
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.QuanLyKhoaHocReducer.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setLoading: () => {
            dispatch(setLoading());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)