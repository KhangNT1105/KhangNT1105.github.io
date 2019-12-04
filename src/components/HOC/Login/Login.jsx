import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { FaFacebookF } from "react-icons/fa";
import ggLogo from "../../../assets/img/googleicon.png";
import "./Login.scss";
import { dangNhap } from "../../../redux/actions/QuanLyNguoiDungAction";
export function Login(props) {
  const [state, setstate] = useState({
    account: {
      taiKhoan: "",
      matKhau: ""
    }
  });

  const handleChange = e => {
    let { name, value } = e.target;
    setstate({
      account: {
        ...state.account,
        [name]: value
      }
    });
    console.log(state);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(state.account);
    props.dangNhap(state.account);
  };
  return (
    <Fragment>
      <div className="login__facebook">
        <FaFacebookF /> Continue with Facebook
      </div>
      <div className="login__google">
        <img src={ggLogo} alt="" /> Continue with Gmail
      </div>
      <form action="" className="form-group" onSubmit={handleSubmit}>
        <div className="input-field ">
          <input type="text" name="taiKhoan" required onChange={handleChange} />
          <label>Username</label>
          <span></span>
        </div>
        <div className="input-field ">
          <input
            type="Password"
            name="matKhau"
            required
            onChange={handleChange}
          />
          <label>Password</label>
          <span></span>
        </div>
        <input
          type="submit"
          className="form-control btn btn-primary"
          value="Sign In"
        />
        <div className="login__forgot">
          or <span>Forgot Your Password ?</span>
        </div>
        <div className="login__signup">
          <p>
            Don't have an account? <span>Sign Up</span>
          </p>
        </div>
      </form>
    </Fragment>
  );
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    dangNhap: thongTinNguoiDung => {
      dispatch(dangNhap(thongTinNguoiDung));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
