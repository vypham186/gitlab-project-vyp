import { Button, Dropdown, ButtonGroup, Form } from 'react-bootstrap';
import MasterLayout from '../layouts/MasterLayouts';


function Home() {
  return (
    <MasterLayout>
     <div className="text-center">
        <form action="action_page.php" method="post">
            <div className="heading">Log in</div>
            <div className="container d-flex justify-content-center">
          <div className="container1" style={{ padding: '50px' }}>
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" className="form-control smaller-input" placeholder="Enter Username" name="uname" required />
            <br>
            </br>
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" className="form-control smaller-input" placeholder="Enter Password" name="psw" required />
            </div>
          </div>
          <div className="button">
            <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>Login</button>
      <label style={{ marginLeft: '10px' }}>
        <input type="checkbox" name="remember" /> Remember me
      </label>
      </div>

          <div className="container2" style={{ marginTop: '20px' }}>
            <button type="button" className="btn btn-danger">Cancel</button>
            <span className="psw" style={{ marginLeft: '10px' }}>Forgot <a href="/contact#contact">password?</a></span>
          </div>
        </form>
      </div>


      <div className="container d-flex justify-content-center" style={{ marginTop: '70px' }}>
        <ButtonGroup>
          <Button className="btn btn-primary" size="lg" >Get Started</Button>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle split className="btn btn-primary" id="dropdown-split">
              <span className="visually-hidden">Toggle Dropdown</span>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ width: '1450px'}}>
              <Dropdown.Item>About Us</Dropdown.Item>
              <Dropdown.Item>Our Projects</Dropdown.Item>
              <Dropdown.Item>Address</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
        {/* <HomeComponent /> */}
      </div>
    </MasterLayout>
  );
}

export default Home;