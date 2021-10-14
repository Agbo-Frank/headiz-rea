import { useEffect } from 'react'
import { Doughnut, Line } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { getVOrder } from '../redux/action/orderAction'
import Menu from './Menu'
import Header from './Header';
import { MainContent, SideBarD, StyledBodyD, Table } from './styles/StyledBody'

function MyDoughnut(){
  var dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVOrder())
  }, [dispatch])
  var orders = useSelector(state => state.order.items)
  const state = {
    labels: ['Active Orders', 'Paid Transaction', 'Canceled Transaction'],
    datasets: [
      {
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000'
        ],
        data: [50, 35, 15]
      }
    ]
  }

  return(
    <Doughnut
          data={state}
          height={50}
          width={50}
          options={{
            legend:{
              display:true,
              position:'top'
            }
          }}
        />
  )
}
function MyLine(){
  const state = {
    labels: ['January', 'February', 'March','April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: "#d72691",
        lineTension: 0.8,
        fill: {
          target: 'origin',
          above: '#d72691',
        },
        data: [8, 7, 11, 12, 15, 23, 5, 15, 1, 3]
      }
    ]
  }

  return(
    <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            }
          }}
        />
  )
}

function Card ({title, value}){
  return(
    <div className="card">
        <p>{title}</p>
        <strong>{value}</strong>
    </div>
  )
}
function display(date){
        var date = new Date(date)
        var dateArr = date.toUTCString().split(' ')
        var newDate  = `${dateArr[1]} ${dateArr[2]} ${dateArr[3]}`
        return newDate
}

function displayId(id){
  var id = id.slice(0, 6)
  return `${id}...`
}

export default function Dashboard(){
  var dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVOrder())
  }, [dispatch])

  var orders = useSelector(state => state.order.items)
  var user = useSelector(state => state.user.user)
    return(
        <>
        <Header user={user}/>
           <StyledBodyD>
        <SideBarD style={{
          height: "130vh",
          flex: "20%"
        }}>
          <Menu active='Dashboard' view='vendor'/>
        </SideBarD>
        <MainContent className="dashboard">
            <div className="cards">
                <Card title="Page Reviews" value="20"/>
                <Card title="Recent Orders" value="4"/>
                <Card title="Total Sales" value="400,000"/>
                <Card title="Total Produc" value="10"/>
            </div>
            <div className="charts">
              <div className="chart">
                <div className="header">
                  <h2>Sales Summary</h2>
                  <select>
                    <option value="month">Month</option>
                    <option value="day">Day</option>
                  </select>
                </div>
              ` <MyLine/>
              </div>
              <div className="chart">
                <div className="header">
                  <h2>Overall Sales</h2>
                  <select>
                    <option value="month">Month</option>
                    <option value="day">Day</option>
                  </select>
                </div>
              ` <MyDoughnut/>
              </div>
            </div>
            <div className="table">
              <h3>Recent Orders</h3>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Products</th>
                    <th>Payment Type</th>
                    <th>Fulfillment</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    orders.map(order => (
                      <tr key = { order._id }>
                        <td>{ displayId(order._id) }</td>
                        <td>{ display(order.date) }</td>
                        <td>{ order.name }</td>
                        <td>card</td>
                        <td>Delivered</td>
                        <td>${ order.price }</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
        </MainContent>
      </StyledBodyD>
        </>
    )
}