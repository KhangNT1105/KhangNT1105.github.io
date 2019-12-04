import React, { Component } from "react";
import OverlayHeader from "../../components/HOC/OverlayHeader/OverlayHeader";
import ListCourseFilter from "./ListCourseFilter/ListCourseFilter";
import ListCourseContent from "./ListCourseContent/ListCourseContent";
import OverlayCourse from "../../components/HOC/CourseOverlay/CourseOverlay";
const CourseOverlay = OverlayHeader(OverlayCourse);
export default class ListCoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maDanhMuc: ""
    };
  }
  componentWillUnmount() {
    window.scrollTo(0, 0);
  }
  componentDidMount() {
    let { maDanhMuc } = this.props.match.params;
    this.setState({
      maDanhMuc: maDanhMuc
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      let { maDanhMuc } = this.props.match.params;
      this.setState({
        maDanhMuc: maDanhMuc
      });
    }
  }

  render() {
    return (
      <div className="listCoursePage">
        <CourseOverlay />
        <ListCourseFilter maDanhMuc={this.state.maDanhMuc} />
        <ListCourseContent />
      </div>
    );
  }
}
