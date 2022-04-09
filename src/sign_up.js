import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./sign_up.css";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import Footer from './footer';
import { Row, Col, Grid } from 'react-bootstrap';

const SignUp = (props) => {

    const [data, setData] = useState({email: "", password:"", new_password: ""})
    const onChangeHandler = (event) => {
        const key = event.target.name;
        setData({...data, [key]: event.target.value});
    }
    
    const submitHandler = () => {
        
        if(data.password == data.new_password) {
            console.log(data)
        } else {
            window.alert('Nhập lại mật khẩu')
        }
        
        
        
    }

    useEffect(() => {
        console.log('nguyendeptrai')
        // document.getElementById('email').value=''
    }, []);


    


    return ( 
        <div>
        <div className="container-fluid">
        <div className="flex-container">
             <div className="account">
                 <div className="doan1">
                    <img className="logo_face" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook"></img>
                    
                 </div>

                 <div className="doan2">
                     <h4>Đăng nhập gần đây</h4>
                 </div>

                 <div className="doan3">
                     <p>Nhấp vào ảnh của bạn hoặc thêm tài khoản</p>
                 </div>
             </div>

             <div className="login">
                 <div className="father-form">
                <Form className="form_login">
                <Row>
                    <Col>
                <Form.Group className="mb-3 font" controlId="formBasicName1">
                    <Form.Control  onChange={onChangeHandler} type="text" name="Ho va ten dem" placeholder="Họ và tên đệm" required={true} value={data.ho}/>
                    
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3 font" controlId="formBasicName2">
                   
                    <Form.Control  onChange={onChangeHandler} type="text" name="Ten" placeholder="Tên" required={true} value={data.ten}/>
                </Form.Group>
                </Col>
                </Row>

                    <Form.Group className="mb-3 font" controlId="formBasicEmail">
                    
                        <Form.Control  onChange={onChangeHandler} type="email" name="email" placeholder="Email hoặc số điện thoại" required={true} value={data.email}/>
                        
                    </Form.Group>

                    <Form.Group className="mb-3 font" controlId="formBasicPassword1">
                    
                        <Form.Control onChange={onChangeHandler} type="password" name="password" placeholder="Mật khẩu mới" required={true} value={data.password}/>
                    </Form.Group>
                    <Form.Group className="mb-3 font" controlId="formBasicPassword2">
                    
                        <Form.Control onChange={onChangeHandler} type="password" name="new_password" placeholder="Nhập lại mật khẩu mới" required={true} value={data.new_password}/>
                    </Form.Group>
                    <Form.Group className="mb-3 font" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Nhớ mật khẩu" />
                    </Form.Group>
                    <div className="d-grid gap-2 font">
                    <Button variant="primary" onClick={submitHandler} className="dangnhap">
                        <b>Đăng ký</b>
                    </Button>
                    </div>

                    {/* <div className="text-center">
                        <a style={{textDecoration: 'none'}} href="/quenmk">Quên mật khẩu?</a>
                    </div> */}
                    <hr/>

                    <div className="font">
                   
                       
                        <Button variant="warning" type="submit"> <a style={{textDecoration: 'none'}} href="/login">Quay lại đăng nhập  </a></Button>
                       
                    
                    </div>
                    
                </Form>
                </div>
                
                <div className="cmt">
                    <p ><b>Tạo Trang</b> dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp</p>
                    </div>
             </div>
        </div>
        </div>
        <Footer></Footer>
        </div>
        
        
        
    )
}
export default SignUp