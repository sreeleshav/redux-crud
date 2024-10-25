import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
    // const nav = useNavigate()
    // useEffect(() => {
    //     setTimeout(() => {
    //         nav('/contact')
    //     }, 5000)
    // }, [])

    return (
        <>
         <div className='container-fluid p-5'>
        <Row>
          <Col className='d-flex flex-column justify-content-center'>
            <h1>My Contact</h1>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusantium veniam magni atque voluptates rerum pariatur laboriosam in vitae, ipsa, molestias quod officia provident porro iure tempore numquam? Nisi, dolores?</p>
            <div className='d-grid'>
              <Link to={'/contact'} className='btn btn-success'>Go To Contacts</Link>
            </div>
          </Col>
          <Col>
            <img src="https://icons.veryicon.com/png/o/education-technology/ui-icon/contacts-77.png" className='img-fluid' alt="landing" />
          </Col>
        </Row>
      </div>
            

        </>
    )
}

export default Landing