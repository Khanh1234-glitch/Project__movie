import IMG from './../img/download.png'
import { Col, Nav, Row, Tab, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { useEffect } from 'react'
import { createinfoSystem } from '../slices/infoSystem'

const TableListMovie = () => {
    const { data, isLoading , error} = useSelector(
        (state: RootState) => state.createinfoSystem,
      );
    const dispatch= useDispatch<any>();
    useEffect(()=>{
        dispatch(createinfoSystem());
    },[] )
      
    
  return (
    <div className='container'>
 <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link  eventKey="first" style={{backgroundColor:"none !important"}}>
                <img src={IMG}  alt="" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" >
                Tab 2
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
             
            </Tab.Pane>
            <Tab.Pane eventKey="second">
          
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  )
}

export default TableListMovie