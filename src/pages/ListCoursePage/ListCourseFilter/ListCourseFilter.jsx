import React, { Component } from "react";
import { connect } from "react-redux";
import "./ListCourseFilter.scss";
import { FiSearch } from "react-icons/fi";
import {
  layDanhMucKhoaHoc,
  timKiemKhoaHoc,
  layDanhSachKhoaHoc,
  layDanhSachKhoaHocTheoMaDanhMuc
} from "../../../redux/actions/QuanLyKhoaHocAction";
export class ListCourseFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maDanhMuc: "",
      tenKhoaHoc: ""
    };
  }
  componentDidMount() {
    this.props.layDanhMucKhoaHoc();
    if (this.props.maDanhMuc !== "") {
      this.props.layDanhSachKhoaHocTheoMaDanhMuc(this.props.maDanhMuc);
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.maDanhMuc !== this.props.maDanhMuc) {
      this.props.layDanhSachKhoaHocTheoMaDanhMuc(this.props.maDanhMuc);
    }
  }
  // componentWillReceiveProps(nextProps) {
  //         this.props.layDanhSachKhoaHocTheoMaDanhMuc(nextProps.maDanhMuc);
  // }
  renderCategories = () => {
    return this.props.mangDanhMucKhoaHoc.map(item => {
      return <option value={item.maDanhMuc}>{item.maDanhMuc}</option>;
    });
  };

  handleChange = e => {
    let { value, name } = e.target;
    this.setState({
      [name]: value
    });
    if (name === "maDanhMuc") {
      if (value !== "") {
        this.props.layDanhSachKhoaHocTheoMaDanhMuc(value);
      } else {
        this.props.layDanhSachKhoaHoc();
      }
    }
    if (name === "tenKhoaHoc") {
      this.props.timKiemKhoaHoc(value);
    }
  };

  render() {
    console.log("propsaasd", this.props.maDanhMuc);

    return (
      <div className="listCourseFilter">
        <div className="container">
          <div className="listCourseFilter__content">
            <div className="row">
              <div className="col-md-4">
                <p>
                  <span>Filter by : </span>
                  <select>
                    <option>ALL</option>
                  </select>
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <span>Choose Category : </span>{" "}
                  <select
                    name="maDanhMuc"
                    onChange={this.handleChange}
                    id="danhMucKhoaHoc"
                  >
                    <option value="">ALL</option>
                    {this.renderCategories()}
                  </select>
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <span>Choose Class : </span>{" "}
                  <select name="" id="">
                    <option value="">ALL</option>
                  </select>
                </p>
              </div>
              <div className="col-md-12 search  ">
                <div className="input-group mt-3 ">
                  <input
                    type="text"
                    name="tenKhoaHoc"
                    onChange={this.handleChange}
                    placeholder="Type Course Name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">
                      <FiSearch />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    layDanhSachKhoaHoc: () => {
      dispatch(layDanhSachKhoaHoc());
    },
    layDanhMucKhoaHoc: () => {
      dispatch(layDanhMucKhoaHoc());
    },
    timKiemKhoaHoc: tenKhoaHoc => {
      dispatch(timKiemKhoaHoc(tenKhoaHoc));
    },
    layDanhSachKhoaHocTheoMaDanhMuc: maDanhMuc => {
      dispatch(layDanhSachKhoaHocTheoMaDanhMuc(maDanhMuc));
    }
  };
};
const mapStateToProps = state => {
  return {
    mangDanhMucKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhMucKhoaHoc,
    mangDanhSachKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhSachKhoaHoc
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListCourseFilter);
