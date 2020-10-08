import styles from '../styles.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MyLayout from '../components/MyLayout'

export default function Home(props) {
  return (
      <MyLayout>
        <p>Hello World</p>
        <p>{props.users[0].first_name}</p>
        <img src={props.users[0].avatar}/>
        <Footer users={props.users}/>
      </MyLayout>
  )
}

export async function getServerSideProps(){
    const res1 = await fetch('https://reqres.in/api/users?page=1');
    const data1 = await res1.json();
    const res2 = await fetch('https://reqres.in/api/users?page=2');
    const data2 = await res2.json();
    let data = data1.data
    data.push(...data2.data)
    return { props: { users: data } }
}
