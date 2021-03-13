import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import './AdminPayouts.css'

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiInputBase-input": {
      width: "25ch",

    },
    margin: "5px"
  },
  container: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    width: 500,
    margin: 'auto',
    justifyContent: 'space-around'


  },
  button: {
    margin: '5px'
  }
}))



function AdminPayouts() {

  const dispatch = useDispatch()
  const history = useHistory();
  const classes = useStyles()

  //holds data from DB on all payments not yet paid
  const coachPayouts = useSelector((store) => store.payout);

  //modal
  const [visible, setVisible] = useState(false)
  const [confirmNumber, setConfirmNumber] = useState('')


  //paynow packages together all necessary info to be sent to the server when ted pays
  function preparePayout(clientArray) {
    const date = new Date()
    setConfirmNumber(date.getTime())
    const newCheck =
    {
      date: date.toISOString(),
      clients: clientArray,
      confirmation_number: date.getTime()
    }

    console.log('new check equals', newCheck)
    dispatch({ type: 'PAY_COACH', payload: newCheck })
    setVisible(true)

  }

  function handlePayoutsHistory() {
    dispatch({ type: 'GET_PAYOUTS_HISTORY' })
    history.push('/admin/payoutshistory')
  }

  useEffect(() => {
    setTimeout(() => dispatch({ type: 'GET_PAYMENT' }), 300);
  }, [])

  return (

    <div>

      <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => history.push('/admin/upload')}>
          Upload New CSV
        </Button>

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => handlePayoutsHistory()}>
          View Payout History
        </Button>

      </div>

      {visible ?
        <div className="modal">
          <p>Your confirmation number is {confirmNumber}</p>
          <button onClick={() => setVisible(false)}>Confirm</button>
        </div> : <span></span>}

      {/* placeholder button for manual GET if list  doesn't load*/}
      <table>
        <thead>
          <tr>

            <td>Coach</td>
            <td>Amount Owed</td>
            <td>Pay?</td>
          </tr>
        </thead>
        <tbody>
          {coachPayouts.map((debt) => {
            return (
              <tr key={debt.user_id}>
                <td>{debt.full_name}</td>
                <td>{debt.total_owed * .75}</td>
                <td><button onClick={() => preparePayout(debt.clients)}>PAY NOW</button></td>

              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  );
}

export default AdminPayouts;
