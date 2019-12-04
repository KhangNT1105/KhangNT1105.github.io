import React, { Component } from "react";
import "./ListCourseContent.scss";
import { connect } from "react-redux";
import { IoIosList, IoMdGrid } from "react-icons/io";
import { layDanhSachKhoaHoc } from "../../../redux/actions/QuanLyKhoaHocAction";
import CoursePopular from "../../../components/CoursePopular/CoursePopular";
import Pagination from "../../../components/Pagination/Pagination";
import CourseList2 from "../../../components/CourseList2/CourseList2";
export class ListCourseContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGrid: true,
      currentPage: 1,
      itemPerPage: 8
    };
  }
  renderListCourseGrid = () => {
    const indexOfLastCourse = this.state.currentPage * this.state.itemPerPage;
    const indexOfFirstCourse = indexOfLastCourse - this.state.itemPerPage;
    const currentPages = this.props.mangDanhSachKhoaHoc.slice(
      indexOfFirstCourse,
      indexOfLastCourse
    );
    return currentPages.map(item => {
      return (
        <div className="col-md-3">
          <CoursePopular item={item} />
        </div>
      );
    });
  };
  renderListCourseList = () => {
    const indexOfLastCourse = this.state.currentPage * this.state.itemPerPage;
    const indexOfFirstCourse = indexOfLastCourse - this.state.itemPerPage;
    const currentPages = this.props.mangDanhSachKhoaHoc.slice(
      indexOfFirstCourse,
      indexOfLastCourse
    );
    return currentPages.map(item => {
      return (
        <div className="col-md-12">
          <CourseList2 item={item} />
        </div>
      );
    });
  };
  renderIconGrid = () => (
    <>
      <span className="active" onClick={() => this.setState({ isGrid: true })}>
        <IoMdGrid /> Grid
      </span>
      <span onClick={() => this.setState({ isGrid: false })}>
        <IoIosList /> List
      </span>
    </>
  );
  renderIconList = () => (
    <>
      <span onClick={() => this.setState({ isGrid: true })}>
        <IoMdGrid /> Grid
      </span>
      <span className="active" onClick={() => this.setState({ isGrid: false })}>
        <IoIosList /> List
      </span>
    </>
  );
  changeCurrentPage = number => {
    this.setState({
      currentPage: number
    });
  };

  componentDidMount() {
    this.props.layDanhSachKhoaHoc();
  }

  handleChange = e => {
    let { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="listCourseContent">
        <div className="container">
          <div className="row top">
            <div className="col-md-6 left">
              <b>
                Records Found :{" "}
                <span>{this.props.mangDanhSachKhoaHoc.length}</span>
              </b>
            </div>
            <div className="col-md-6 right">
              <div className="display">
                {this.state.isGrid
                  ? this.renderIconGrid()
                  : this.renderIconList()}
              </div>
            </div>
          </div>
          <div className="listCourseContent">
            <div className="row">
              {this.state.isGrid
                ? this.renderListCourseGrid()
                : this.renderListCourseList()}
              <div className="col-md-12 text-center">
                <Pagination
                  totalCourse={this.props.mangDanhSachKhoaHoc.length}
                  coursePerPage={this.state.itemPerPage}
                  currentPage={this.state.currentPage}
                  changeCurrentPage={this.changeCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  mangDanhSachKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhSachKhoaHoc
});
const mapDispatchToProps = dispatch => ({
  layDanhSachKhoaHoc: () => dispatch(layDanhSachKhoaHoc())
});
export default connect(mapStateToProps, mapDispatchToProps)(ListCourseContent);
