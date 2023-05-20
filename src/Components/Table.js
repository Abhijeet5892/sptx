import React from 'react'
import axios from "axios";

const baseURL = "https://raw.githubusercontent.com/akshita151199/APIs/main/data";


const Table = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log("api",response.data)
      setPost(response.data.data);
    });
  }, []);
console.log("Dtta",post)
  // console.log("Dtta",post)

  if (!post) return null;

  return (
    <table className="table text-white" >
      <thead>
        <tr>
          <th>Image</th>
          <th>Amount</th>
          <th>Asset</th>
          <th>Chain</th>
          <th>Referral_earning </th>
          <th>State</th>
          <th>Type</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        {post.map(( p, index ) => {
          return (
            <tr key={index}>
              <td><img src={p.img} /></td>
              <td>{p.amount}</td>
              <td>{p.asset}</td>
              <td>
              <img src={p.chain.img} />
                {p.chain.name}
              </td>
              <td>{p.referral_earnings}</td>
              <td>{p.state}</td>
              <td>{p.type}</td>
              <td style={{wordBreak:'break-word'}}>{p.user}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

export default Table
