import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Data from '../../DataContext';
import MovieHeader from '../movies/MovieHeader';

const BookingIndex = () => {
    const navigate = useNavigate();
    const { screen, setTime, setDate, setSnacksCost, snacksCost, time } = useContext(Data);  
    const handleSelectSeats = (e) =>{
      e.preventDefault();
      if(!time){
        alert('please select show time');
        return;
      }
      let date = new Date(document.getElementById('selectDate').value); 
      const toDate = new Date(screen.to);
      if(!date){
        alert('please select date');
        document.getElementById('selectDate').focus();
        return;
      }
      if( date.getFullYear() <= toDate.getFullYear()){
        if( date.getMonth() <= toDate.getMonth()){
          if( date.getDate() <= toDate.getDate())
            setDate(document.getElementById('selectDate').value)
        }
      } else {
        alert(`movie is available only within ${screen.from.toLocaleDateString()} and ${toDate.toLocaleDateString()}`);
        return;
      }
      navigate('selectSeat');
    }

    if(!screen){
      navigate('/movies');
    }
    
  return (
    <main>
      <MovieHeader />
      <h1>{screen.screenName}</h1>
      <form>
        <div>
            <p> SHOW TIME </p>
            <div className='selectTime'>
                <input type='radio' name='time' value='10.00AM' onClick={(e)=>{setTime(e.target.value)}} />
                <label htmlFor='time'> 10.00AM</label>
                <input type='radio' name='time' value='1.00PM' onClick={(e)=>{setTime(e.target.value)}} />
                <label htmlFor='time'> 1.00PM</label>
                <input type='radio' name='time' value='4.30PM' onClick={(e)=>{setTime(e.target.value)}} />
                <label htmlFor='time'> 4.30PM</label>
            </div>
            <div>
              <p>DATE:</p>
              <input type='date' id='selectDate' />
            </div>
          </div>
          <div className='snacks'>
            <figure>
              <img src='' alt='popcorn' />
              <figcaption>Pop corn <span>Rs.100</span></figcaption>
              <button onClick={(e)=>{
                e.preventDefault();
                setSnacksCost(snacksCost+100) }}> ADD </button>
            </figure>
            <figure>
              <img src='' alt='burger' />
              <figcaption> Burger <span>Rs.120</span></figcaption>
              <button onClick={(e)=>{
                e.preventDefault();
                setSnacksCost(snacksCost+120) }}> ADD </button>
            </figure>
            <figure>
              <img src='' alt='coca' />
              <figcaption> Coca <span>Rs.80</span></figcaption>
              <button onClick={(e)=>{
                e.preventDefault();
                setSnacksCost(snacksCost+80) }}> ADD </button>
            </figure>
            <figure>
              <img src='' alt='water' />
              <figcaption> water <span>Rs.0</span></figcaption>
              <button onClick={(e)=>{
                e.preventDefault();
                setSnacksCost(snacksCost+0) }}> ADD </button>
            </figure>
            <figure>
              <img src='' alt='samosa' />
              <figcaption> Samosa <span>Rs.75</span></figcaption>
              <button onClick={(e)=>{
                e.preventDefault();
                setSnacksCost(snacksCost+75) }}> ADD </button>
            </figure>
          </div>
          <button onClick={handleSelectSeats}> SELECT SEATS </button>
      </form>
    </main>
  )
}

export default BookingIndex;
