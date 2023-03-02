import React from 'react'



const isIncome = Math.round(Math.random());
const InfoCard = () => {
  return (
    <div style={{textAlign: 'center', padding : '0 10%',fontSize: '0.8rem'}}>
      Try saying: <br/>
     Add {isIncome ? 'Income ' : 'Expense '} 
     for {isIncome ? 'Ksh 500 ' : 'Ksh 1000 '}
      in category {isIncome ? 'Salary ' : 'House '}
       for {isIncome ? 'Monday ' : 'Thursday '}
    </div>
  )
}

export default InfoCard
