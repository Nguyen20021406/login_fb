import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./login.css";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import Footer from './footer';



const Login = (props) => {
    const [data, setData] = useState({email: "", password:""})
    const onChangeHandler = (event) => {
        const key = event.target.name;
        setData({...data, [key]: event.target.value});
    }
    
    const submitHandler = () => {
        console.log(data)
        
        
        
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
                    <Form.Group className="mb-3 font" controlId="formBasicEmail">
                    
                        <Form.Control  onChange={onChangeHandler} type="email" name="email" placeholder="Email hoặc số điện thoại" required={true} value={data.email}/>
                        
                    </Form.Group>

                    <Form.Group className="mb-3 font" controlId="formBasicPassword">
                    
                        <Form.Control onChange={onChangeHandler} type="password" name="password" placeholder="Mật khẩu" required={true} value={data.password}/>
                    </Form.Group>
                    <Form.Group className="mb-3 font" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Nhớ mật khẩu" />
                    </Form.Group>
                    <div className="d-grid gap-2 font">
                    <Button variant="primary" onClick={submitHandler} className="dangnhap">
                        <b>Đăng nhập</b>
                    </Button>
                    </div>

                    <div className="text-center">
                        <a style={{textDecoration: 'none'}} href="/quenmk">Quên mật khẩu?</a>
                    </div>
                    <hr/>

                    <div className="font">
                   
                       
                        <Button variant="warning" type="submit"> <a style={{textDecoration: 'none'}} href="/signup">Tạo tài khoản mới </a></Button>
                       
                    
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
export default Login